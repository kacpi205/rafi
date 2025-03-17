import MainLayout from '@/layouts/MainLayout'
import { PageProps } from '@/types';
import { Head, usePage } from '@inertiajs/react'
import React from 'react'

export interface Props {

    notification: string;
}

export default function newtestpage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {notification} = usePage<PageProps>().props;


    return (

    <>

        <MainLayout>

            <div>

            <Head title="Welcome" />
            <h1>Welcome</h1>
            <p>Hello {notification}, welcome to your first Inertia app!</p>
                {notification}
            </div>

        </MainLayout>

    </>

)
}

// export default newtestpage
