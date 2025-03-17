// import { NavItem, type BreadcrumbItem } from '@/types';
// import { Head, Link } from '@inertiajs/react';
// import { LayoutGrid } from 'lucide-react';
// import Paper from '@mui/material/Paper';
// import { CardProduct } from '@/components/card';
// import Counter from '@/Counter';
// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
// import { AppSidebar } from '@/components/app-sidebar';

import MainLayout from '@/layouts/MainLayout';
import { faker } from '@faker-js/faker';
import { Button, Card, Divider } from 'antd';

export default function Products() {
    return (
        <MainLayout>
            <div className="h-screen w-screen">
                <div className="flex flex-row justify-start">
                    <div className="h-screen w-1/6 justify-start">
                        <div className="h-full">
                            <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video size-full overflow-hidden rounded-xl border stroke-neutral-900/20 dark:stroke-neutral-100/20">
                                <div className="m-2 h-8 p-2"></div>
                                <Divider />
                                <div className="m-2 h-8 p-2"></div>
                                <Divider />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-4">
                            <div className="m-8 rounded-xl border p-2">
                                <div className="">
                                    <Card>
                                        <img src={faker.image.urlPicsumPhotos()} />
                                        <div>
                                            <h3>{faker.lorem.words(3)}</h3>
                                            <div className="flex flex-row justify-between">
                                                <Button type="primary" size="middle" className="">
                                                    a
                                                </Button>
                                                <Button type="primary" size="middle" className="">
                                                    b
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
