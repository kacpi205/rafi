// import { NavItem, type BreadcrumbItem } from '@/types';
// import { Head, Link } from '@inertiajs/react';
// import { LayoutGrid } from 'lucide-react';
// import Paper from '@mui/material/Paper';
// import { CardProduct } from '@/components/card';
// import Counter from '@/Counter';
// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
// import { AppSidebar } from '@/components/app-sidebar';

import MainLayout from '@/layouts/MainLayout';
// import { ProductsProps } from '@/types';
import { faker } from '@faker-js/faker';
// import { usePage } from '@inertiajs/react';
import { Button, Card, Divider, Radio } from 'antd';
import Title from 'antd/es/typography/Title';
// import {
//     CopyOutlined
//   } from '@ant-design/icons';

export default function Products() {
    // const { iconCopy } = usePage<ProductsProps>().props;

    return (
        <MainLayout>
            <div className="h-screen w-screen">
                <div className="flex flex-row justify-start">
                    <div className="h-screen w-1/6 justify-start">
                        <div className="h-full">
                            <div className="relative aspect-video h-80 w-full overflow-hidden rounded-xl border bg-gray-300">
                                <div className="">
                                    <Title level={3} className="m-2 p-4">
                                        Kategorie
                                    </Title>
                                </div>
                            </div>
                            <div className="border-sidebar-border/70 relative aspect-video size-full overflow-hidden rounded-xl border stroke-neutral-900/20">
                                <Divider />
                                <Title level={3} className="m-2 p-2">
                                    Filtry
                                </Title>
                                <Divider />
                                <div className="m-2 h-[$categoryHeight] p-2"></div>
                                <Divider />
                                <div className="m-2 h-20 p-2">
                                    <div className="flex flex-col">
                                        <Radio>a</Radio>
                                        <Radio>b</Radio>
                                    </div>
                                </div>
                                <Divider />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-4">
                            <div className="m-8 rounded-xl border p-2">
                                <div className="">
                                    <Card className="row-start-1">
                                        <img src="/maczek.webp" alt="Product Image" className="h-20 w-20" />
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
                                    <Card className="row-start-2">
                                        <img src="/maczek.webp" alt="Product Image" className="size-full" />
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
                                    <Card>
                                        <img src="/maczek.webp" alt="Product Image" className="size-full" />
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
