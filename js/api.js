const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  const tabContainer = document.getElementById("tab-container");
  tabContainer.textContent = "";

  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
       <a onclick="handleLoadNews('${category.category_id}')"  class="tab">${category.category}</a> 
       `;
    tabContainer.appendChild(div);
  });
};
const handleLoadNews = async (categroryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categroryId}`
  );
  const data = await response.json();

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  if (data.data.length === 0) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class=" flex items-center justify-center flex-col"> <img class="mb-6" src="Icon.png" />
     <p class=" text-5xl text-bold">Oops!! Sorry, There is no content here</P>
     </div>
      `;
    cardContainer.appendChild(div);
  }

  data.data.forEach((news) => {
    console.log(news);
    const div = document.createElement("div");
    div.innerHTML = `
      
        <div>
          <div class="card w-96 bg-base-100">
           <img class="h-60  w-80" src=${news?.thumbnail} alt='bg img'/>
            <div class="flex gap-4 mx-4 mt-4 mb-2 ">
             <div> <img class='rounded-full h-10 w-10' src=${
               news?.authors[0]?.profile_picture
             } alt=""></div>
             
             <div >
               <h2 class="card-title">${news?.title}</h2>
            
               <div>
               <h4 class="card-title">${news.authors[0]. profile_name}${
                news.authors[0].verified
                  ? '<img src="fi_10629607.png" alt="" />'
                  : ""
                } </h4>
               
              </div>
             
             
               <h4>${news?.others?.views}</h4>         
             </div>
            </div>
          
          </div>
        </div>
       
       
      
        `;
    cardContainer.appendChild(div);
  });
};

//  const drawingPage =async (categroryId) => {
//   const response =await fetch(`https://openapi.programming-hero.com/api/videos/category/${categroryId}`);
//   const data =await response.json();
//   const emptyContainer = document.getElementById('empty-card-container');
//   if( data?.data?.length === 0){
//     const div = document.createElement('div');
//     div.innerHTML=`
//    <div class=" flex items-center justify-center flex-col"> <img class="mb-6" src="Icon.png" />
//    <p class=" text-5xl text-bold">Oops!! Sorry, There is no content here</P>
//    </div>
//     `;
//     emptyContainer.appendChild(div);
//   }
//   else{

//   }

//  }

handleCategory();
handleLoadNews("1000");
// drawingPage()
