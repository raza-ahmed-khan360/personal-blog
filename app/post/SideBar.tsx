// components/SideBar.tsx
import Link from 'next/link';
import { getRecentSidebars, formatSidebarDate } from '../utils/sidebar';
import { SideBar as SideBarType } from '../types/sidebar';
import Image from 'next/image';

interface SideBarProps {
  currentPostSlug?: string;
}

export default function SideBar({ currentPostSlug }: SideBarProps) {
  // Get recent sidebar items, excluding current post
  const sidebarItems = getRecentSidebars(10, currentPostSlug);

  return (
    <div className="w-1/2.1 flex-col justify-center items-start gap-8 inline-flex">
      <div className="self-stretch text-2xl font-semibold leading-loose">
        Recent blog posts
      </div>
      {sidebarItems.map((item: SideBarType) => (
        <div key={item.sidebarId} className="self-stretch flex-col justify-start items-start gap-8 flex">
          <Link href={`/post/${item.sidebarSlug}`}>
            <Image
            width={324}
            height={204} 
              className="h-[204px] relative w-full" 
              src={item.sidebarImage} 
              alt={item.sidebarTitle}
            />
            <div className="self-stretch h-[196px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-[148px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch text-[#6840c6] text-sm font-semibold leading-tight">
                  {formatSidebarDate(item.sidebarDate)}
                </div>
                <div className="self-stretch text-2xl font-semibold leading-loose">
                  {item.sidebarTitle}
                </div>
                <div className="self-stretch text-base font-normal leading-normal">
                  {item.sidebarExcerpt}
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                {item.tags.map((tag, index) => (
                  <div key={index} className="mix-blend-lighten justify-start items-start flex">
                    <div 
                      className="px-2.5 py-0.5 rounded-2xl justify-center items-center flex"
                      style={{ backgroundColor: tag.bgColor }}
                    >
                      <div 
                        className="text-center text-sm font-medium leading-tight"
                        style={{ color: tag.color }}
                      >
                        {tag.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}