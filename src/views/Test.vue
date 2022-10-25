<script>
const User = {
    template: "<div>User</div>",
};

// these are passed to `createRouter`
const routes = [
    // dynamic segments start with a colon
    { path: "/oferta/crm", component: User },
];

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
    currentPath.value = window.location.hash;
});

routes[currentPath.value.slice(1) || "/"];
</script>
