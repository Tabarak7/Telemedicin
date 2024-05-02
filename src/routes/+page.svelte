<script>
    let input =""; 
    let json = [];
    let username = ''; 
    let password = ''; 
    const login = async ()=> {
        const result = await fetch('api/login', {
            method: 'POST',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ username, password})
        });
        const response = await result.text();
        console.log(result);
        if (result.status === 200) {
            window.location = '/admin'; 
        } else { 
            alert('Forkert brugernavn eller password');
        }
    }; 
  
</script>
<h1>Diabeat </h1>
<div>
{input}
</div>
   
    <h2>Login</h2>
        <label for="Bruger">Bruger:</label>
        <input bind:value={username} type="text" id="username" name="username">
        <label for="password">Password:</label>
        <input bind:value={password} type="password" id="password" name="password">
        <button on:click={login}>Login</button>
    <p>
        <a href="/Glemt-password">Har du glemt dit password?</a>
    </p>
    <p>
         <a href="/Opret-Profil">Opret profil</a>
    </p>