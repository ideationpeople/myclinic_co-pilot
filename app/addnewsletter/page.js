"use client";

import dynamic from "next/dynamic";

const CKEditorComponent = dynamic(() => import('@/app/Components/CKEditorComponent'), { 
    ssr: false 
  });
export default function AddNewsletter() {
    
    return (
        <div>
            <CKEditorComponent />
        </div>
    );
}
