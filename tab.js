const tabBtns = document.querySelectorAll('.btn');
const tabPanes = document.querySelectorAll('.p');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    const tabPane = document.getElementById(`${tabId}-tab`);

    // Remove active class from all buttons
    tabBtns.forEach((btn) => btn.classList.remove('active'));

    // Add active class to clicked button
    btn.classList.add('active');

    // Hide all tab panes
    tabPanes.forEach((pane) => pane.classList.remove('active'));

    // Show selected tab pane
    tabPane.classList.add('active');
  });
});