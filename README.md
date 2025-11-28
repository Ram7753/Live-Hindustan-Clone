PART B – EXPLANATION + DOCUMENTATION
1. Design Document

Project Goal:
The objective of this project is to design a simple news homepage inspired by the layout of Live Hindustan. The page includes main headlines, a search feature, category filters, a breaking-news bar, and a list of recent articles. The design focuses on easy reading, clear structure, and quick navigation.

2. Wireframe / Text Sketch
--------------------------------------------------------
| Header: Logo | Date | Login | Subscribe              |
--------------------------------------------------------
| Search Bar                                          |
--------------------------------------------------------
| Breaking News Strip                                  |
--------------------------------------------------------
| Main Headline Section (Title + Summary + Link)       |
--------------------------------------------------------
| Latest Articles (Small clickable news cards)         |
--------------------------------------------------------
| Categories: Politics | Business | Sports | etc.       |
--------------------------------------------------------
| Footer: About | Contact | Social Links               |
--------------------------------------------------------

3. Layout Decisions

Single-Column Structure:
A one-column design was selected to keep reading simple and consistent across mobile and desktop screens. News portals commonly use vertical flow because users scroll through multiple stories.

Top Story Design:
The top story is displayed larger than the rest.
It contains:

A bigger title

A short description

A “Read More” link

This helps highlight the most important article of the day.

Breaking-News Placement:
The breaking-news banner is at the top so users immediately see urgent updates.

Category Row:
Categories are placed below the latest articles so readers can easily switch to specific topics after viewing the main news.

4. Data Fetching Strategy

Approach Used:
Static JSON data or a local dataset (as used in classroom environments).

Reasons for Choosing This Approach:

Loads quickly

No dependency on network or external API

Easy to test and maintain

Trade-Offs:

Static Data	Dynamic API
Always stable	Fresh data every time
Easy to implement	Requires error handling
Works offline	Can fail if API is down
5. Code Explanation

Components Made:

Component	Purpose
Layout Component	Wraps header, footer, and page structure
SearchBar	Accepts user input for searching news
NewsCard	Displays individual small news stories
Hero / TopNews	Shows the main headline section
CategoryBar	Displays all available categories
6. Data Model Structure

Example structure used for each article:

{
  id: number,
  title: string,
  image?: string,
  summary: string,
  date: string,
  category: string
}


Why this model works:

Allows consistent rendering in components

Optional image field prevents breaking when no image exists

Easy iteration using .map()

7. Challenges Faced and Solutions

Problem 1: Dark mode caused text to disappear
The default black background made the text unreadable.

Solution:
Added white text and dark background styles globally.

Problem 2: Search bar stretched too wide
It did not fit properly inside the layout.

Solution:
Placed it inside a container and added padding to control width.

Problem 3: Long headlines breaking layout
Some article titles became too long.

Solution:
Applied text trimming using ellipsis.

Problem 4: Scrollbar looked unpolished
Default scrollbar didn’t match the design.

Solution:
Customized scrollbar with minimal CSS.

Problem 5: AI suggested invalid Tailwind classes
Certain Tailwind utility classes suggested by AI did not exist.

Solution:
Cross-checked official Tailwind documentation and corrected the classes.

8. Improvements for Future Versions

Add live news API

Introduce pagination

Implement user login and bookmarking

Improve SEO with metadata

Add more images and improved card design

Create category-wise pages

PART C – TESTING & EDGE CASES
1. Missing Image in Article

If an article has no image, a fallback image is shown so the layout remains intact.

2. No Articles Available

A message appears saying:
“No news available right now.”

3. Very Long Titles

Long titles are automatically shortened using ellipsis to maintain clean alignment.

4. Small Screen Adjustments

The layout switches to a fully stacked view:

Cards become full width

Search bar stretches to 100%

Headline text scales down for readability

5. Loading State

Shows a simple text:
“Loading news…”

6. Error Handling

If fetching fails:
“Unable to load articles. Please try again.”

PART D – AI USE + REFLECTION
1. Where AI Helped

Generated initial component structure

Suggested Tailwind utility classes

Helped create the wireframe idea

Assisted with repetitive JSX patterns

Helped fix logic for search and filtering

2. Where AI Was Incorrect
Issue	AI Suggestion	Fix
Invalid Tailwind classes	Suggested non-existent classes	Corrected manually
Wrong import paths	Wrong folder shortcuts	Adjusted paths
Over-complex CSS	Too many styling rules	Cleaned and simplified
Fixed widths broke mobile layout	Hardcoded pixel sizes	Replaced with responsive units
3. How AI-Generated Code Was Verified

Tested each component in the browser

Compared Tailwind class names with official documentation

Removed unused CSS rules

Followed VSCode linting recommendations

Manually restructured folders for clarity

4. Custom Modifications

Improved the look of the top story section

Optimized card spacing and typography

Added better fallbacks for missing images

Reshaped the overall layout to resemble a real news site
