import { elements } from '../elements';

let closeBtn;
let modal;

function handlePolicyModal(e) {
  if (e.target === elements.policyBtn) {
    modal = document.querySelector('.js-policy-modal');
    closeBtn = document.querySelector('.js-policy-modal-close');
  }
  if (e.target === elements.termsBtn) {
    modal = document.querySelector('.js-terms-modal');
    closeBtn = document.querySelector('.js-terms-modal-close');
  }
  toggleModal();
  modal.addEventListener('click', handleBackdropClick);
  closeBtn.addEventListener('click', toggleModal);
  window.addEventListener('keydown', handleKeyDownClick);
}

function handleKeyDownClick(e) {
  if (e.code === 'Escape') {
    toggleModal();
  }
}

function handleBackdropClick(e) {
  if (e.target === modal) {
    toggleModal();
  }
}

function toggleModal() {
  modal.classList.toggle('is-hidden');
  document.documentElement.classList.toggle('no-scroll');
  window.removeEventListener('keydown', handleKeyDownClick);
}

export default handlePolicyModal;
