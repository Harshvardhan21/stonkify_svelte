
<script>
    import Indices from "../components/widgets/indices.svelte"
    import Futures from "../components/widgets/futures.svelte"
    import Marketdata from "../components/widgets/market-data.svelte"
    import Screener from "../components/widgets/screener.svelte"
</script>
<svelte:head>
    <title>
        Stonkify: Market
    </title>
</svelte:head>
<div class="px-60 py-10">
<h1 class="uppercase text-textwhite text-4xl font-fam ">market quotes</h1>
</div>

<div class="flex flex-wrap space-x-10 s px-52 pb-10">
    <div class="py-10">
        <h2 class=" text-2xl font-fam text-textwhite pb-5 px-2 ">Indices</h2>
        <Indices/>
    </div>
    <div class="py-10">
        <h2 class=" text-2xl font-fam text-textwhite pb-5 px-2">Futures</h2>
        <Futures/>
    </div>
    <h1 class="uppercase text-textwhite text-4xl font-fam ">market data</h1>
    <div class="py-10">
    
        <Marketdata/>
    </div>
    <h1 class="uppercase text-textwhite text-4xl font-fam ">market screener</h1>
    <div class="py-10">
    
        <Screener/>
    </div>
</div>
