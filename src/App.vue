<template> 
    <div class="page" id='App'>
        <div class="container">
            <div class="logo">
                <h3>ACT</h3>
            </div>
            <div class="row">
                <div class="col-lg-10 upper-input" >
                    <input type="text" value="" placeholder="...تحويل من" v-model="eg">
                </div>
                <div class="col-lg-2  upper-label">
                    <label for="">مصر</label>
                </div>
                <div class="col-lg-10 lower-input">
                    <input type="text" class="lower-value" placeholder="...الى" v-model="value" readonly>
                    <span class="currency-name">{{currency_name}}</span>
                    <span class="currency-result">{{currency_result}}</span>
                </div>
                <div class="col-lg-2  lower-label" @click="addCaption">
                    <caption class="choose-country">اختر دولة</caption>
                    <select name="" id="select-item"  ></select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//arrays
let store_value = []
let countries = ['قطر','الجزائر','البحرين','الإمارات','المغرب','السودن','ليبيا','الأردن','عمان','السعودية','الكويت','اليمن','لبنان','فلسطين','سوريا','العراق','الصومال','جزر القمر','موريتانيا','جيبوتى','تونس']
let countryValues = [5.07,0.13,49,5.03,1.91,0.041,3.91,26.05,47.97,4.93,60.46,0.074,0.012,5.71,0.0047,0.013,0.032,0.040,0.51,0.10,6.15]
let countryCurrencyName = ['ريال','دينار','دينار','در هم','درهم','جنيه','دينار','دينار','ريال','ريال','دينار','ريال','ليرة','شيكل','ليرة','دينار','شلن','فرنك','أوقية','فرنك','دينار']
export default{
    data(){
       return{
            value:'',
            currency_name:'',
            eg:'',
            currency_result:'',
       }
    },
    methods:{
        addCaption(){
            //overlay
            let overlay = document.createElement('div')
                overlay.className = 'overlay'   
            let overlayContainer = document.createElement('div')
                overlayContainer.className = 'container'
            let overlayCloseBtn = document.createElement('span')
                overlayCloseBtn.className = 'close-btn'
                overlayCloseBtn.textContent = 'X'
            for(let i=0;i < countries.length;i++){
                let optionItem = document.createElement('option')
                    optionItem.textContent = countries[i]
                    optionItem.setAttribute('data-value',countryValues[i])
                    optionItem.className = countryCurrencyName[i]
                    overlayContainer.appendChild(optionItem)
            }
            overlayContainer.appendChild(overlayCloseBtn)
            overlay.appendChild(overlayContainer)
            document.body.appendChild(overlay)
            //close overlay
            let closeOverlay = document.querySelector('.close-btn')
            closeOverlay.addEventListener('click',()=>{
                closeOverlay.parentElement.parentElement.remove()
            })
            //loop on options
            let items = document.querySelectorAll('.overlay option')
            let captionName = document.querySelector('.lower-label .choose-country')
            items.forEach(ele=>{
                ele.addEventListener('click',()=>{
                    this.value = ele.getAttribute('data-value')
                    this.currency_name = ele.className
                    captionName.textContent = ele.textContent
                    closeOverlay.parentElement.parentElement.remove()  
                })
            })
        }
    }
    ,
    watch:{
        eg:function(v){
            if(this.value == ''){
                alert('insert value')
            }else{
                let result
                store_value.push (v/this.value)
                result = store_value.pop().toFixed(2)
                this.currency_result = result
            }
        }
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import './assets/style.scss';
</style>