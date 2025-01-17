// blogscript.jsx
import { useEffect } from 'react';

export default function blogscript() {
  useEffect(() => {
    const handleReadMore = (event) => {
      const blogPost = event.target.closest('.blog-post');
      const content = blogPost.querySelector('p');

      // Toggle the expanded class on the paragraph element
      if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        event.target.textContent = 'Read More';
      } else {
        content.classList.add('expanded');
        event.target.textContent = 'Read Less';
      }
    };

    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach((button) =>
      button.addEventListener('click', handleReadMore)
    );

    return () => {
      // Clean up the event listeners when the component unmounts
      readMoreButtons.forEach((button) =>
        button.removeEventListener('click', handleReadMore)
      );
    };
  }, []);  // Run only once when the component mounts

  return null;  // No JSX needed in this file
}
