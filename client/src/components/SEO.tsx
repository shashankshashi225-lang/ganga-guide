import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    jsonLd?: object;
}

/**
 * SEO Component for setting page-specific meta tags
 * Uses document.head manipulation since we're in a Vite SPA
 */
export function SEO({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = 'https://gangaguide.com/og-image.jpg',
    ogType = 'website',
    jsonLd,
}: SEOProps) {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Helper to update or create meta tag
        const setMetaTag = (name: string, content: string, property = false) => {
            const attr = property ? 'property' : 'name';
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (element) {
                element.setAttribute('content', content);
            } else {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                element.setAttribute('content', content);
                document.head.appendChild(element);
            }
        };

        // Update meta description
        setMetaTag('description', description);

        // Update keywords if provided
        if (keywords) {
            setMetaTag('keywords', keywords);
        }

        // Update Open Graph tags
        setMetaTag('og:title', title, true);
        setMetaTag('og:description', description, true);
        setMetaTag('og:type', ogType, true);
        setMetaTag('og:image', ogImage, true);
        if (canonicalUrl) {
            setMetaTag('og:url', canonicalUrl, true);
        }

        // Update Twitter tags
        setMetaTag('twitter:title', title);
        setMetaTag('twitter:description', description);
        setMetaTag('twitter:image', ogImage);

        // Update canonical URL
        if (canonicalUrl) {
            let canonical = document.querySelector('link[rel="canonical"]');
            if (canonical) {
                canonical.setAttribute('href', canonicalUrl);
            } else {
                canonical = document.createElement('link');
                canonical.setAttribute('rel', 'canonical');
                canonical.setAttribute('href', canonicalUrl);
                document.head.appendChild(canonical);
            }
        }

        // Add JSON-LD schema if provided
        if (jsonLd) {
            // Remove any existing page-specific JSON-LD
            const existingScript = document.querySelector('script[data-page-schema="true"]');
            if (existingScript) {
                existingScript.remove();
            }

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-page-schema', 'true');
            script.textContent = JSON.stringify(jsonLd);
            document.head.appendChild(script);
        }

        // Cleanup function
        return () => {
            // Remove page-specific JSON-LD on unmount
            const pageSchema = document.querySelector('script[data-page-schema="true"]');
            if (pageSchema) {
                pageSchema.remove();
            }
        };
    }, [title, description, keywords, canonicalUrl, ogImage, ogType, jsonLd]);

    return null; // This component doesn't render anything
}

export default SEO;
