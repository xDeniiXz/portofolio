<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=1280, initial-scale=1.0">

    <!-- Primary Meta Tags -->
    <title inertia>Mohamad Deni Yulio | Full-Stack Developer</title>
    <meta name="title" content="Mohamad Deni Yulio | Full-Stack Developer">
    <meta name="description" content="Portfolio of Mohamad Deni Yulio, Full-Stack Developer specializing in Laravel, React, Tailwind CSS, and modern web applications.">
    <meta name="author" content="Mohamad Deni Yulio">
    <meta name="theme-color" content="#1e293b">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ request()->url() }}">
    <meta property="og:title" content="Mohamad Deni Yulio | Full-Stack Developer">
    <meta property="og:description" content="Portfolio of Mohamad Deni Yulio, Full-Stack Developer specializing in Laravel, React, Tailwind CSS, and modern web applications.">
    <meta property="og:image" content="{{ asset('/images/og-image.jpg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ request()->url() }}">
    <meta property="twitter:title" content="Mohamad Deni Yulio | Full-Stack Developer">
    <meta property="twitter:description" content="Portfolio of Mohamad Deni Yulio, Full-Stack Developer specializing in Laravel, React, Tailwind CSS, and modern web applications.">
    <meta property="twitter:image" content="{{ asset('/images/og-image.jpg') }}">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>