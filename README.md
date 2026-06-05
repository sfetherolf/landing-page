```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Charity: Water - Every Drop Changes Lives</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body{
    line-height:1.6;
    color:#1a1a1a;
}

/* Navigation */
nav{
    background:#ffffff;
    padding:20px 8%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

.logo{
    font-size:1.8rem;
    font-weight:bold;
    color:#003366;
}

.nav-btn{
    background:#FFC907;
    color:#000;
    padding:12px 24px;
    text-decoration:none;
    border-radius:5px;
    font-weight:bold;
}

/* Hero Section */
.hero{
    background:linear-gradient(rgba(0,51,102,.75),rgba(0,51,102,.75)),
    url('https://images.unsplash.com/photo-1542810634-71277d95dcbb');
    background-size:cover;
    background-position:center;
    color:white;
    text-align:center;
    padding:120px 8%;
}

.hero h1{
    font-size:3.5rem;
    margin-bottom:20px;
}

.hero p{
    max-width:700px;
    margin:auto;
    font-size:1.2rem;
    margin-bottom:30px;
}

.hero-btn{
    display:inline-block;
    background:#FFC907;
    color:#000;
    padding:15px 35px;
    text-decoration:none;
    border-radius:5px;
    font-weight:bold;
    font-size:1.1rem;
}

/* Mission Section */
.section{
    padding:80px 8%;
}

.section h2{
    text-align:center;
    color:#003366;
    margin-bottom:30px;
    font-size:2.5rem;
}

.mission{
    text-align:center;
    max-width:900px;
    margin:auto;
    font-size:1.1rem;
}

/* Stats */
.stats{
    background:#FFC907;
    padding:80px 8%;
}

.stats-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
    text-align:center;
}

.stat h3{
    font-size:3rem;
    color:#003366;
}

.stat p{
    font-weight:bold;
}

/* Gallery */
.gallery{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:20px;
}

.gallery img{
    width:100%;
    height:250px;
    object-fit:cover;
    border-radius:10px;
}

/* Call To Action */
.cta{
    background:#003366;
    color:white;
    text-align:center;
    padding:100px 8%;
}

.cta h2{
    color:white;
    margin-bottom:20px;
}

.cta-btn{
    display:inline-block;
    margin-top:20px;
    background:#FFC907;
    color:black;
    text-decoration:none;
    padding:15px 35px;
    border-radius:5px;
    font-weight:bold;
}

/* Footer */
footer{
    background:#111;
    color:white;
    text-align:center;
    padding:30px;
}

@media(max-width:768px){
    .hero h1{
        font-size:2.5rem;
    }
}
</style>
</head>

<body>

<nav>
    <div class="logo">charity: water</div>
    <a href="#" class="nav-btn">Donate</a>
</nav>

<section class="hero">
    <h1>Clean Water Changes Everything</h1>
    <p>
        703 million people still live without access to clean and safe drinking water.
        Together, we can change that.
    </p>
    <a href="#" class="hero-btn">Make an Impact</a>
</section>

<section class="section">
    <h2>Why Water Matters</h2>
    <p class="mission">
        Access to clean water improves health, education, and economic opportunity.
        Every donation helps fund sustainable water projects in communities around the world.
    </p>
</section>

<section class="stats">
    <div class="stats-container">
        <div class="stat">
            <h3>703M</h3>
            <p>People Need Clean Water</p>
        </div>

        <div class="stat">
            <h3>100%</h3>
            <p>Public Donations Fund Projects</p>
        </div>

        <div class="stat">
            <h3>29</h3>
            <p>Countries Served</p>
        </div>
    </div>
</section>

<section class="section">
    <h2>Stories of Change</h2>

    <div class="gallery">
        <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d" alt="Clean Water">
        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c" alt="Community">
        <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846" alt="Children">
    </div>
</section>

<section class="cta">
    <h2>Your Gift Creates Lasting Change</h2>
    <p>
        Every dollar helps bring clean, safe water to people who need it most.
    </p>

    <a href="#" class="cta-btn">Donate Today</a>
</section>

<footer>
    <p>© 2026 charity: water Inspired Student Project</p>
</footer>

</body>
</html>
```

