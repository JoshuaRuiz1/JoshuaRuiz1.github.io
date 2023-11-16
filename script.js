$(document).ready(function() {
    $('.icon-filter').on('click', function() {
        $('.container-filters').toggleClass('active');
    });
});

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
modal.showModal();
});

closeModal.addEventListener("click", () => {
modal.close();
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const channelContainer = document.getElementById('channelContainer');
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');

    searchInput.addEventListener('input', function () {
        updateChannelVisibility();
    });

    filterCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            updateChannelVisibility();
        });
    });

    function updateChannelVisibility() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedFilters = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.name);

        const allChannels = document.querySelectorAll('.card-channels');

        allChannels.forEach(function (channel) {
            const channelTypes = Array.from(channel.querySelectorAll('.channel-types span'))
                .map(span => span.textContent.trim());

            const channelName = channel.querySelector('h3').textContent.trim().toLowerCase();

            const isVisible = (
                selectedFilters.every(filter => channelTypes.includes(filter)) &&
                (channelName.includes(searchTerm) || searchTerm === '')
            );

            channel.style.display = isVisible ? 'block' : 'none';
        });
    }
});


