const smallCups = document.querySelectorAll('.small');
const liters = document.querySelector('.liters');
const percentage = document.querySelector('.percentage');
const amount = document.querySelector('.amount');
const remained = document.querySelector('.cupinside');
smallCups.forEach((small , index) => {
     small.addEventListener('click', () => highlightcups(index));
})

function highlightcups(index) {
  if(index == smallCups.length-1){
    if(smallCups[index].classList.contains('fill')) {
      index--;
    }
  }
  if(smallCups[index].classList.contains('fill') && !smallCups[index+1].classList.contains('fill')) {
    index--;
  }
  smallCups.forEach((small, index1) => {
      if(index1 <= index){
       small.classList.add('fill');
      } else{
          small.classList.remove('fill');
      }
  })

  bigCup(index);
}


function bigCup(index) {
  const fullCups = index+1;
  const totalCups = 8;
  
  if( fullCups === 0){
      percentage.style.display = 'none';
      liters.innerHTML = `2L `;
  }else{
      percentage.innerHTML = `${12.5*fullCups} % completed`;
      let height = fullCups * (322/8);
      percentage.style.height = `${height}px`
      percentage.style.display = 'block';
      liters.innerHTML = `${2-(fullCups*0.25)} L `;
      amount.style.height = `${322-height}px`;
      if(fullCups>6){
        percentage.style.fontSize = '20px';
        liters.style.fontSize = '20px';
        amount.style.padding = '0';
      }else{
        percentage.style.fontSize = '15px';
        liters.style.fontSize = '30px';
        amount.style.padding = '20% 0';
      }
  }
}