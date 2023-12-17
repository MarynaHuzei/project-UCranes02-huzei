import { gallery } from '../services/gallery';

function handlePagination({ target }) {
  if (!target.hasAttribute('data-page')) return;

  const page = parseInt(target.dataset.page);
  gallery.changePage(page);
}

export default handlePagination;
