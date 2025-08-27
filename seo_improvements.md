# Next.js SEO Enhancement Plan

This document outlines specific, actionable Search Engine Optimization (SEO) improvements for the Ora Dental Next.js application. These recommendations are based on an analysis of the current codebase and aim to enhance search engine visibility and ranking.

## 1. Metadata Optimization

**Recommendation:** Implement dynamic metadata (title, description, Open Graph tags) for all key page types to provide contextually relevant information to search engines and social media platforms.

**Key Page Types for Dynamic Metadata:**
*   `app/[lang]/page.tsx` (Homepage)
*   `app/[lang]/treatments/page.tsx` (Treatments Listing Page)
*   `app/[lang]/aesthetic/page.tsx` (Aesthetic Services Listing Page)
*   `app/[lang]/aesthetic/[category]/page.tsx` (Specific Aesthetic Category Page)
*   `app/[lang]/teams/[teamId]/page.tsx` (Individual Team Member Page)
*   And any other content-rich pages that should be individually indexed.

**Action:** Utilize Next.js's `metadata` object or `generateMetadata` function to set page-specific metadata. Fetch dynamic content for titles and descriptions using mechanisms like the `useDictionary` hook or by passing props from server components.

**Example: `app/[lang]/treatments/page.tsx`**

```typescript
// app/[lang]/treatments/page.tsx 
import { getDictionary } from '@/get-dictionary'; // Assuming this fetches localized content
import { Locale } from '@/i18n-config';

// Option 1: Static metadata (if title/description are known at build time or simple)
// export const metadata = {
//   title: 'Dental Treatments | Ora Dental', // This would need localization
//   description: 'Explore a wide range of dental treatments offered at Ora Dental clinic.',
// };

// Option 2: Dynamic metadata (more flexible for localization and dynamic content)
export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang); // Fetch localized strings

  return {
    title: `${dictionary.treatments.pageTitle} | Ora Dental`, // e.g., "Dental Treatments | Ora Dental"
    description: dictionary.treatments.pageDescription, // e.g., "Explore our comprehensive dental treatments..."
    openGraph: {
      title: `${dictionary.treatments.pageTitle} | Ora Dental`,
      description: dictionary.treatments.pageDescription,
      // images: [{ url: 'https://yourdomain.com/path/to/treatments-image.jpg' }],
      // url: `https://yourdomain.com/${params.lang}/treatments`,
    },
  };
}

export default async function TreatmentsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  // ... rest of your page component
  return (
    <div>
      <h1>{dictionary.treatments.pageTitle}</h1>
      {/* ... content ... */}
    </div>
  );
}
```

**Example: `app/[lang]/teams/[teamId]/page.tsx`**

```typescript
// app/[lang]/teams/[teamId]/page.tsx
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
// Assume a function to fetch team member data
// import { getTeamMemberById } from '@/lib/teamService';

export async function generateMetadata({ params }: { params: { lang: Locale; teamId: string } }) {
  const dictionary = await getDictionary(params.lang);
  // const teamMember = await getTeamMemberById(params.teamId, params.lang); // Fetch team member data

  // Placeholder for team member name - replace with actual data fetching
  const teamMemberName = `Dr. ${params.teamId.replace('-', ' ')}`; // Example: "Dr. John Doe"

  const title = `${teamMemberName} | Ora Dental`;
  const description = `${dictionary.teamMemberPage.meet} ${teamMemberName}, ${dictionary.teamMemberPage.expertAtOraDental}`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      // images: [{ url: teamMember.profileImageUrl || 'https://yourdomain.com/path/to/default-profile.jpg' }],
      // url: `https://yourdomain.com/${params.lang}/teams/${params.teamId}`,
    },
  };
}

export default async function TeamMemberPage({ params }: { params: { lang: Locale; teamId: string } }) {
  // ...
  // const teamMember = await getTeamMemberById(params.teamId, params.lang);
  // ...
  return (
    <div>
      {/* <h1>{teamMember.name}</h1> */}
      {/* ... content ... */}
    </div>
  );
}
```

## 2. Header Hierarchy Correction

**Recommendation:** Ensure a logical and semantic heading structure on each page, with one unique `<h1>` tag per page, followed by `<h2>`, `<h3>`, etc., in a non-skipping order.

**Action for Homepage (`app/[lang]/page.tsx`):**
*   Change the main visual title from a `<p>` tag to an `<h1>` tag.

**Current (Illustrative):**
```html
<!-- app/[lang]/page.tsx -->
<p class="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
  {page.title}
</p>
```

**Proposed Change:**
```html
<!-- app/[lang]/page.tsx -->
<h1 class="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
  {page.title} {/* Ensure page.title is the intended H1 for the homepage */}
</h1>
```

**Action for `Card.tsx` component:**
*   Modify the `BuildTitle` internal component (or the part of `Card.tsx` that renders the title) to accept a `level` prop and render the appropriate heading tag (`<h1>`, `<h2>`, `<h3>`). Default to `<h2>` if no level is specified.

**Proposed Change in `Card.tsx` (Conceptual):**
```typescript
// components/Card.tsx (Simplified)

// Assuming BuildTitle is an internal function or part of Card's render logic
const BuildTitle = ({ title, level }: { title: string; level?: number }) => {
  const Tag = level === 1 ? 'h1' : level === 3 ? 'h3' : 'h2'; // Default to h2
  return <Tag className="text-xl font-bold">{title}</Tag>;
};

// When using Card.tsx:
// For homepage sections (About, Treatments sections):
// <Card {...data} titleLevel={2} />

// For a page where the card's title IS the main page title (e.g., a very simple team member page if it solely uses a Card for the main content):
// <Card {...data} titleLevel={1} />
// However, it's generally better for the page itself to define its H1.

// For list items on a page that already has an H1 (e.g., treatment items on Treatments page):
// <Card {...data} titleLevel={2} />
```

**Action for list pages (e.g., `app/[lang]/treatments/page.tsx`):**
*   The page itself should have its own `<h1>` (e.g., "Our Dental Treatments" or its localized equivalent).
*   The titles of individual items listed on this page (e.g., individual treatments rendered via `Card.tsx`) should then be `<h2>`.

**Example Structure for `app/[lang]/treatments/page.tsx`:**
```html
<!-- app/[lang]/treatments/page.tsx (Rendered Output) -->
<html>
  <head>
    <title>Our Dental Treatments | Ora Dental</title>
  </head>
  <body>
    <h1>Our Dental Treatments</h1> {/* Main H1 for the listing page */}
    <div>
      {/* Individual Treatment Card 1 */}
      <div>
        <img src="..." alt="Specific Alt Text for Treatment 1" />
        <h2>Treatment Name 1</h2> {/* H2 for the item title */}
        <p>Description of treatment 1...</p>
        <a href="/lang/treatments/treatment-1">Learn More</a>
      </div>
      {/* Individual Treatment Card 2 */}
      <div>
        <img src="..." alt="Specific Alt Text for Treatment 2" />
        <h2>Treatment Name 2</h2> {/* H2 for the item title */}
        <p>Description of treatment 2...</p>
        <a href="/lang/treatments/treatment-2">Learn More</a>
      </div>
      {/* ... more treatments ... */}
    </div>
  </body>
</html>
```

## 3. Enhanced Structured Data

**Recommendation:** Improve the existing `Organization` schema and implement additional relevant schemas like `Service`, `Person`, and `BreadcrumbList` to provide richer context to search engines.

**Action for `Organization` schema (`app/[lang]/layout.tsx`):**
*   Update the `logo` property to point to the main business logo (e.g., `public/assets/logo.jpg`).
*   Add `address` (with `@type: "PostalAddress"`, `streetAddress`, `addressLocality`, `postalCode`, `addressCountry`) and `telephone` properties.

**Proposed Change in `app/[lang]/layout.tsx` (Conceptual):**
```javascript
// app/[lang]/layout.tsx (within the <script type="application/ld+json"> tag)
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ora Dental",
  "url": "https://www.oradental.com", // Replace with actual domain
  "logo": "https://www.oradental.com/assets/logo.jpg", // Assuming logo.jpg is the main logo
  // "image": "https://www.oradental.com/assets/logo.jpg", // Can also use image
  "description": "Ora Dental Clinic Luxembourg - Top dental care services.", // Example
  "telephone": "+352 XXXXXXXX", // Add actual phone number
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Rue de la Clinique", // Add actual street address
    "addressLocality": "Luxembourg City", // Add actual city
    "postalCode": "L-XXXX", // Add actual postal code
    "addressCountry": "LU" // Use ISO 3166-1 alpha-2 country code
  },
  "sameAs": [ // Optional: Add social media links
    // "https://www.facebook.com/oradental",
    // "https://www.instagram.com/oradental"
  ]
}
```

**Action for `Service` schema:**
*   Implement on individual treatment detail pages (e.g., `app/[lang]/treatments/[treatmentId]/page.tsx`) or on the main treatments listing page (`app/[lang]/treatments/page.tsx`) for each service.
*   Include `name`, `description`, `provider` (linking to the `Organization`), and potentially `medicalSpecialty`.

**Example for `app/[lang]/treatments/[treatmentId]/page.tsx` (Conceptual):**
```html
<!-- Individual Treatment Page (e.g., app/[lang]/treatments/dental-implants/page.tsx) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Dental Implant Procedure", // Or more general category
  "name": "Dental Implants", // Specific service name
  "description": "High-quality dental implants to restore your smile and function...", // Page's meta description or specific service description
  "provider": {
    "@type": "Organization",
    "name": "Ora Dental",
    "url": "https://www.oradental.com" // Link back to the main organization
    // Potentially add "@id": "https://www.oradental.com/#organization" if your Organization schema has an @id
  },
  "medicalSpecialty": "Dentistry" // Or more specific if applicable
  // "areaServed": { // Optional, if services are limited to a specific region
  //   "@type": "Place",
  //   "name": "Luxembourg"
  // }
}
</script>
```
*   For `app/[lang]/treatments/page.tsx`, you could have an array of `Service` objects if you want to list them all on the main treatments page.

**Action for `Person` schema:**
*   Implement on team member pages (`app/[lang]/teams/[teamId]/page.tsx`).
*   Include `name`, `jobTitle`, `image`, `worksFor` (linking to `Organization`), and potentially `medicalSpecialty`.

**Example for `app/[lang]/teams/[teamId]/page.tsx` (Conceptual):**
```html
<!-- Team Member Page (e.g., app/[lang]/teams/dr-jane-doe/page.tsx) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Jane Doe", // Team member's name
  "jobTitle": "Lead Dentist", // Team member's job title
  "image": "https://www.oradental.com/assets/team/dr-jane-doe.jpg", // URL to profile image
  "worksFor": {
    "@type": "Organization",
    "name": "Ora Dental",
    "url": "https://www.oradental.com"
  },
  "medicalSpecialty": "General Dentistry" // Or specific specialties
  // "url": "https://www.oradental.com/lang/teams/dr-jane-doe" // URL of this profile page
}
</script>
```

**Action for `BreadcrumbList` schema:**
*   Implement on pages deeper than the homepage to help users and search engines understand site structure.

**Example for `app/[lang]/treatments/page.tsx` (Conceptual):**
```html
<!-- Treatments Listing Page (app/[lang]/treatments/page.tsx) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://www.oradental.com/[lang]"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Dental Treatments", // Or localized "Treatments"
    "item": "https://www.oradental.com/[lang]/treatments"
  }]
}
</script>
```
**Example for an individual treatment page (e.g., `app/[lang]/treatments/dental-implants/page.tsx`):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://www.oradental.com/[lang]"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Dental Treatments",
    "item": "https://www.oradental.com/[lang]/treatments"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Dental Implants", // Specific treatment name
    "item": "https://www.oradental.com/[lang]/treatments/dental-implants"
  }]
}
</script>
```

## 4. Image Optimization Refinements

**Recommendation:** Improve image `alt` text for better accessibility and SEO, and refine the usage of the `priority` prop for optimal loading performance.

**Action for Homepage hero (`app/[lang]/page.tsx`):**
*   Change `alt="London"` for `/assets/luxembourg.jpg` to be more descriptive.

**Current (Illustrative):**
```javascript
// app/[lang]/page.tsx (within HeroPost component or similar)
<Image src="/assets/luxembourg.jpg" alt="London" ... />
```

**Proposed Change:**
```javascript
// app/[lang]/page.tsx
<Image src="/assets/luxembourg.jpg" alt="Panoramic view of Luxembourg city" ... />
// Or, if it's specifically about the clinic's location:
// <Image src="/assets/luxembourg.jpg" alt="Ora Dental clinic location in Luxembourg" ... />
```

**Action for `Card.tsx`:**
*   Modify `BuildImage` (or the image rendering part of `Card.tsx`) to accept a dedicated `altText` prop.
*   If `altText` is not provided, it can fall back to using the card's title (e.g., `params[0].value`), but log a warning during development to encourage providing specific alt text.
*   The data source for cards should be updated to include specific alt texts for images.
*   Remove `priority={true}` from the `<Image>` component within `Card.tsx` to enable lazy loading by default, unless a card image is consistently above the fold.

**Proposed Change in `Card.tsx` (Conceptual):**
```typescript
// components/Card.tsx (Simplified)

// Assuming BuildImage is an internal function or part of Card's render logic
const BuildImage = ({ src, alt, titleForFallback }: { src: string; alt?: string; titleForFallback: string }) => {
  let effectiveAlt = alt;
  if (!alt) {
    effectiveAlt = titleForFallback; // Fallback to title
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Missing specific alt text for image ${src} in Card. Using title "${titleForFallback}" as fallback.`);
    }
  }
  return <Image src={src} alt={effectiveAlt} width={500} height={300} />; // Removed priority={true}
};

// Data source for cards should be updated:
// const cardData = {
//   title: "Advanced Teeth Whitening",
//   imageSrc: "/images/teeth-whitening.jpg",
//   altText: "Close-up of a bright smile after teeth whitening treatment", // Specific alt text
//   // ... other data
// };

// <Card {...cardData} />
```

**Action for `Team.tsx`:**
*   `alt={profil.name}` is generally good for team profile images as the person's name is descriptive in this context. No change needed unless more context can be added (e.g., "Dr. John Doe, Lead Dentist at Ora Dental").

## 5. Internal Linking Strategy Overhaul

**Recommendation:** Prioritize direct links to dedicated content pages in navigation menus and footers to improve crawlability and distribute link equity effectively.

**Action for `Header.tsx` (`NavBar` component):**
*   Change navigation links to point directly to dedicated pages (e.g., `href={'/${lang}/treatments'}`) instead of homepage hash links (`href={'/${lang}/#treatments'}`).
*   This assumes that the `header.navigation` data structure (likely from `getDictionary`) can be updated to hold these direct paths.

**Current (Illustrative, based on description):**
```javascript
// components/Header.tsx (NavBar component)
// Assuming navigation items look like:
// { name: "Treatments", href: `/${lang}/#treatments` }

// Rendered link: <Link href={`/${lang}/#treatments`}>Treatments</Link>
```

**Proposed Change (Data structure and Link component):**
```javascript
// Update dictionary or data source for header.navigation:
// Example item in getDictionary for 'en':
// header: { navigation: [ { name: "Treatments", href: "/en/treatments" } ] }

// components/Header.tsx (NavBar component)
// const navItem = { name: dictionary.header.treatmentsLinkName, href: `/${lang}/treatments` };
// <Link href={navItem.href}>{navItem.name}</Link>
```
*   Ensure that `getDictionary` or the data source for `header.navigation` is updated to provide these direct URLs. For example, for the "Treatments" link, it should provide `/${lang}/treatments`.

**Action for `Folder.tsx` (Footer Component):**
*   Add text links to key pages in the footer. This improves crawlability and user navigation.

**Proposed Addition to `Folder.tsx` (Conceptual):**
```html
<!-- components/Folder.tsx (Footer) -->
<footer>
  {/* ... existing footer content ... */}
  <nav aria-label="Footer navigation">
    <ul>
      <li><Link href={`/${lang}`}>Home</Link></li>
      <li><Link href={`/${lang}/treatments`}>Treatments</Link></li>
      <li><Link href={`/${lang}/aesthetic`}>Aesthetic Services</Link></li>
      <li><Link href={`/${lang}/teams`}>Our Team</Link></li>
      {/* Add link to contact page if it exists, e.g., /${lang}/contact */}
      {/* <li><Link href={`/${lang}/contact`}>Contact Us</Link></li> */}
      {/* Add links to legal pages like Privacy Policy, Terms of Service if they exist */}
      {/* <li><Link href={`/${lang}/privacy-policy`}>Privacy Policy</Link></li> */}
    </ul>
  </nav>
  {/* ... copyright etc. ... */}
</footer>
```

**Recommendation for Content:**
*   Encourage content creators to add contextual internal links within page text where relevant. For example, a blog post about "Benefits of Dental Implants" should link to the main "Dental Implants" service page. This helps distribute link equity and guides users to relevant information.

This comprehensive plan should significantly improve the SEO posture of the Ora Dental Next.js application. Implementation should be prioritized based on potential impact and available resources.
