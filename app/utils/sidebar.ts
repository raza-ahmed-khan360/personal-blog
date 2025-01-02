// utils/sidebar.ts
import { SideBar } from "../types/sidebar";
import { sidebar } from "../data/sidebar";

/**
 * Get a sidebar item by its slug
 */
export const getSidebarBySlug = (slug: string): SideBar | undefined => {
  return sidebar.find(item => item.sidebarSlug === slug);
};

/**
 * Get all sidebar items
 */
export const getAllSidebars = (): SideBar[] => {
  return sidebar;
};

/**
 * Get recent sidebar items
 * @param limit - Number of items to return
 * @param excludeSlug - Slug to exclude from results (e.g., current post)
 */
export const getRecentSidebars = (limit: number = 5, excludeSlug?: string): SideBar[] => {
  return sidebar
    .filter(item => item.sidebarSlug !== excludeSlug)
    .sort((a, b) => new Date(b.sidebarDate).getTime() - new Date(a.sidebarDate).getTime())
    .slice(0, limit);
};

/**
 * Get sidebar items by tag
 */
export const getSidebarsByTag = (tagLabel: string): SideBar[] => {
  return sidebar.filter(item => 
    item.tags.some(tag => tag.label.toLowerCase() === tagLabel.toLowerCase())
  );
};

/**
 * Get all unique tags from sidebar items
 */
export const getAllTags = (): Array<{label: string; color: string; bgColor: string}> => {
  const tagsSet = new Set<string>();
  const uniqueTags: Array<{label: string; color: string; bgColor: string}> = [];

  sidebar.forEach(item => {
    item.tags.forEach(tag => {
      if (!tagsSet.has(tag.label)) {
        tagsSet.add(tag.label);
        uniqueTags.push(tag);
      }
    });
  });

  return uniqueTags;
};

/**
 * Search sidebar items
 */
export const searchSidebars = (query: string): SideBar[] => {
  const searchTerm = query.toLowerCase();
  return sidebar.filter(item => 
    item.sidebarTitle.toLowerCase().includes(searchTerm) ||
    item.sidebarExcerpt.toLowerCase().includes(searchTerm) ||
    item.tags.some(tag => tag.label.toLowerCase().includes(searchTerm))
  );
};

/**
 * Get related sidebar items based on tags
 */
export const getRelatedSidebars = (currentSlug: string, limit: number = 3): SideBar[] => {
  const currentItem = getSidebarBySlug(currentSlug);
  if (!currentItem) return [];

  const currentTags = currentItem.tags.map(tag => tag.label.toLowerCase());
  
  return sidebar
    .filter(item => 
      item.sidebarSlug !== currentSlug && // Exclude current item
      item.tags.some(tag => currentTags.includes(tag.label.toLowerCase())) // Match tags
    )
    .sort((a, b) => {
      // Sort by number of matching tags
      const aMatches = a.tags.filter(tag => currentTags.includes(tag.label.toLowerCase())).length;
      const bMatches = b.tags.filter(tag => currentTags.includes(tag.label.toLowerCase())).length;
      return bMatches - aMatches;
    })
    .slice(0, limit);
};

/**
 * Format sidebar date
 */
export const formatSidebarDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};