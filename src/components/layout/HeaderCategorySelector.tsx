import { getAllCategories } from '@/sanity/lib/client'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HeaderCategorySelector = async () => {
    const categories = await getAllCategories()
  return (
    <div className='relative inline-block'>
        <button className='peer group text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center gap-1'>
            Categories
            <ChevronDown className='transition-transform duration-200 group-hover:rotate-180'/>
        </button>
        <div className='absolute top-full left-0 pt-2 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-all duration'>
            <div className='w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden'>
                <div className='py-4'>
                    {
                        categories.map(category => (
                            <Link
                            key={category._id}
                            href={`/category/${category.slug?.current}`}
                            prefetch
                            className='block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-100'
                            >
                                {category.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderCategorySelector