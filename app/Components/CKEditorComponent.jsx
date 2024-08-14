"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../Firebase";

const MyCustomUploadAdapter = (loader) => {
    return {
        upload: () => {
            return new Promise((resolve, reject) => {
                loader.file.then((file) => {
                    const storageRef = ref(storage, `images/${file.name}`);
                    uploadBytes(storageRef, file).then((snapshot) => {
                        getDownloadURL(snapshot.ref).then((downloadURL) => {
                            resolve({
                                default: downloadURL,
                            });
                        }).catch((error) => {
                            reject(error);
                        });
                    }).catch((error) => {
                        reject(error);
                    });
                });
            });
        },
    };
};

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return MyCustomUploadAdapter(loader);
    };
}

export default function CKEditorComponent() {
    const [editorData, setEditorData] = useState('');

    // Load saved data from localStorage when the component mounts
    useEffect(() => {
        const savedData = localStorage.getItem('editorData');
        if (savedData) {
            setEditorData(savedData);
        }
    }, []);

    // Save editor data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('editorData', editorData);
    }, [editorData]);

    return (
        <div className="bg-info py-5">
            <div className="container mt-4">
                <h2 className="text-center mb-4 text-white">Create Newsletters using this Editor 🎨</h2>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={editorData}
                                    config={{
                                        extraPlugins: [MyCustomUploadAdapterPlugin],
                                        toolbar: [
                                            'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo', 'imageUpload'
                                        ],
                                        image: {
                                            toolbar: [
                                                'imageTextAlternative', 'imageStyle:full', 'imageStyle:side'
                                            ]
                                        }
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setEditorData(data);
                                        console.log({ event, editor, data });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h3>Content</h3>
                                <div className="ck-content" dangerouslySetInnerHTML={{ __html: editorData }} />
                                <button>Save Newsletter</button>
                                <button>Send Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
