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

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: #b3d2d3;
        font-family: "Abril Fatface", serif; }
    .login-box {
        background-color: #FFFFFF;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 2px 2px 15px rgba(0,0,0,0.1);
        width: 300px; }
    .login-box h1 {
        color: #333;
        text-align: center;
        margin-bottom: 28px; }
    .form-field {
        width: 90%;
        padding: 10px;
        margin-bottom: 16px;
        border: 1px solid #ccc;
        border-radius: 4px; }
    .login-button {
        width: 100%;
        padding: 10px;
        background-color: #b3d2d3;
        color: white;
        border-radius: 4px;
        cursor: pointer; }
    .link {
        display: block;
        margin-top: 5px;
        text-align: center;
        color: #5CACEE;
        text-decoration: none; }
</style>

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
