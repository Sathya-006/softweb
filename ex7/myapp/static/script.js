function showContent(option) 
{
    const plantsContentDiv = document.getElementById('Home');
    const seedsContentDiv = document.getElementById('products');
    const planterContentDiv = document.getElementById('People');
    const soilContentDiv = document.getElementById('ContactUs');

    if (option === 'Home') {
        plantsContentDiv.style.display = 'block';
        seedsContentDiv.style.display = 'none';
        planterContentDiv.style.display = 'none';
        soilContentDiv.style.display = 'none';
        
    }
    else if (option === 'products') {
        plantsContentDiv.style.display = 'none';
        seedsContentDiv.style.display = 'block';
        planterContentDiv.style.display = 'none';
        soilContentDiv.style.display = 'none';
    }
    else if (option === 'People') {
        plantsContentDiv.style.display = 'none';
        seedsContentDiv.style.display = 'none';
        planterContentDiv.style.display = 'block';
        soilContentDiv.style.display = 'none';
    }
    else if (option === 'ContactUs') {
        plantsContentDiv.style.display = 'none';
        seedsContentDiv.style.display = 'none';
        planterContentDiv.style.display = 'none';
        soilContentDiv.style.display = 'block';
    }
}