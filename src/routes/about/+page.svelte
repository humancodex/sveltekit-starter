<script>
    import {goto} from '$app/navigation'
// only use goto on client
// goto('/blog')

$effect(() => { goto('/blog') })
//efect is on server , by default all routes are on server
</script>

<h1>this is about </h1>