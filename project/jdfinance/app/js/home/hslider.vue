<template>
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <div v-for="item in enters" :class="$style.item" :key="item.img">
                <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from "../core/slider.vue"

export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [{
                href: "home",
                src: "http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E7%AF%AE%E7%90%83&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2848101109,2173568207&os=96666547,1297177721&simid=3393542314,70452826&pn=3&rn=1&di=7700&ln=1883&fr=&fmq=1590547428194_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Ffile06.16sucai.com%2F2015%2F1118%2F3f67782b40b382104e66f816b8bb088c.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined",
            }],
            enters: [{
                href: "home",
                img: "http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E7%AF%AE%E7%90%83&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2223656641,1344688472&os=1700932220,3807647571&simid=3457927218,275575181&pn=5&rn=1&di=175120&ln=1883&fr=&fmq=1590547428194_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fdpic.tiankong.com%2Fb1%2Fmu%2FQJ6959574486.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined",
                title: "优惠券",
            }],
        }
    },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .slider{
    margin-top: 120px;
    img{
      width: 100%;
    }
  }
  .list{
    @include list(row);
    background: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
      text-decoration: none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>
