"use client";
import { usePathname } from 'next/navigation';
import Breadcrumbs from './Breadcrumbs';

export default function BreadcrumbsWrapper({ items }: { items: any[] }) {
  const pathname = usePathname();
  if (pathname === '/') return null;
  return <Breadcrumbs items={items} />;
}
