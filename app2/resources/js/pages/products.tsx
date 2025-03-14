
import { NavItem, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { LayoutGrid } from 'lucide-react';
import React from 'react';
import Paper from '@mui/material/Paper';
import { CardProduct } from '@/components/card';
import Counter from '@/Counter';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { AppSidebar } from '@/components/app-sidebar';

import { Card } from"antd";
import { faker } from '@faker-js/faker';


export default function Products() {
    return (
    < >
        <div className='h-screen w-screen'>

        <Head title="Dashboard" />
        <div className='flex flex-row justify-start'>
            <div className='h-screen w-1/6 justify-start'>
                {/* NAVBAR */}  
                <div className='h-full'>
                    <div className='size-full stroke-neutral-900/20 dark:stroke-neutral-100/20 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border'>
                        asd
                    </div>
                    <div className=''>
                        
                    </div>
                    <div className=''>
                        
                    </div>




            <h3>By Category</h3>
            <ul>
                {categories.forEach(category => {
                    <li className={setActiveCategory($category->slug)}><a href={ route('shop.index', ['category' => $category->slug]) }>{ $category->name }</a></li>
                });}

            </ul>
        </div> 
        <div>
            <div className="">
                <h1 className="">{ $categoryName }</h1>
                <div>
                    <strong>Price: </strong>
                    <a href={ route('shop.index', ['category'=> request()->category, 'sort' => 'low_high']) }>Low to High</a> |
                    <a href={ route('shop.index', ['category'=> request()->category, 'sort' => 'high_low']) }>High to Low</a>

                </div>
            </div>

        <div>
            <div className='grid gap-4 grid-cols-3 grid-rows-3 max-h-80 max-w-80'>
                <div className='rounded-xl border m-8 p-2'>
                    <div className='auto-cols-fr auto-row-fr'>
                    <Card 

                    >
                        <img src={faker.image.urlPicsumPhotos()}/>
                        asd
                    </Card>
                    </div>

                </div>
            </div>
        </div>

            {/* PRODUKTY */}
            
        </div>       
    </>
);
}
