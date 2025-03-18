const sidebar = document.getElementById('sidebar');
function openSidebar(){
    sidebar.style.display = 'flex';
    sidebar.style.width = '10em'
    document.getElementById('sidebarButton').innerHTML = '<<'
}

function closeSidebar(){
    sidebar.style.display = 'none';
    sidebar.style.width = '0%'
    document.getElementById('sidebarButton').innerHTML = '>>'
}

const sidebarButton = document.getElementById('sidebarButton');
sidebarButton.addEventListener('mouseenter',openSidebar)
sidebar.addEventListener('mouseleave', closeSidebar)