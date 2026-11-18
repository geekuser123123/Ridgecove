// Brand mark — a round badge: golden sun over layered San Francisco ridges that fold down around a sheltered cove.
/** Logo mark SVG. `id` must be unique per page instance. */
export function markSvg(id = 'rc', cls = 'brand__mark') {
  return `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#26505C"/><stop offset="1" stop-color="#14303A"/></linearGradient><clipPath id="${id}c"><circle cx="24" cy="24" r="22"/></clipPath></defs><circle cx="24" cy="24" r="22" fill="url(#${id})"/><g clip-path="url(#${id}c)"><circle cx="30.5" cy="15.5" r="5" fill="#E3B04B"/><path d="M0 26c6-5.5 11-7 16-4.6 3.4 1.6 5.4 1.2 8.6-1.6 4.8-4.2 11.6-4.6 23.4 1.4V48H0Z" fill="#2C7A6A"/><path d="M0 34.5h48V48H0Z" fill="#5FA7B3"/><path d="M15.5 40.6q4.2-1.6 8.4 0t8.4 0" stroke="#E5F1EC" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M0 29.5c5.2-2.6 10-2.4 13.6.4 2.8 2.2 4 5.6 3.4 9.6L15 48H0Z" fill="#CFE0A8"/><path d="M48 28.6c-5.6-1.4-10.4-.6-13.6 2.4-2.6 2.4-3.4 5.8-2.6 9.4L34 48h14Z" fill="#A9BE7B"/></g><circle cx="24" cy="24" r="22" fill="none" stroke="#E3B04B" stroke-width="1.6"/></svg>`;
}

export const markFile = () =>
  markSvg('g', 'mark').replace('<svg class="mark"', '<svg xmlns="http://www.w3.org/2000/svg"').replace(' aria-hidden="true" focusable="false"', '');
