<script lang="ts">
    let {children}=$props();
</script>


<h2>ROOT LAYOUT </h2>


<!-- this is thanks to the children  , you can have the layout in every folder and it will take the children from the page

it you want any data available in the children you can pass it as props to the children
 -->
{@render children()}