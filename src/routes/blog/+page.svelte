<script>
    // see inavlidate with depends and invalidaeALL
    import { invalidate, invalidateAll } from "$app/navigation";
    let {data} = $props();
    $inspect(data);

    function refresh() {
        invalidateAll();
    }
</script>

<h1>BLOG PAGE</h1>
<h2>Hello {data.title}</h2>
<h3>Hello {data.content}</h3>
<h4> {data.env}</h4>
<h5>{data.test}</h5>
<p>time  is {data.time}</p>
<button onclick={refresh}>New Data</button>