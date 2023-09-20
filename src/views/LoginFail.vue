<template>
<div id="login-success">
    <div class="bgimg">
        <!-- error效果 -->
        <div class="glitch" data-text="ERROR">ERROR</div> >

        <div class="black-bg"> 
            <h3>帳號或密碼輸入錯誤</h3>
            <p>請再試一次</p>  
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
#login-success{
    .glitch {
        color: white;
        font-size: $h1-l;
        font-weight: 700;
        position: relative;
        letter-spacing: 1rem;
        margin: 0 auto;
        }
        @keyframes noise-anim {
        $steps: 20;
        @for $i from 0 through $steps {
            #{percentage($i*(1/$steps))} {
            clip: rect(random(100) + px, 9999px, random(100) + px, 0);
            }
        }
    }
        .glitch:after {
        content: attr(data-text);
        position: absolute;
        left: 2px;
        text-shadow: -3.5px 0 rgb(254, 28, 130);
        top: 0;
        color: white;
        background: transparent;
        overflow: hidden;
        clip: rect(0, 900px, 0, 0);
        animation: noise-anim 2s infinite linear alternate-reverse;
        }

        @keyframes noise-anim-2 {
        $steps: 20;
        @for $i from 0 through $steps {
            #{percentage($i*(1/$steps))} {
            clip: rect(random(100) + px, 9999px, random(100) + px, 0);
            }
        }
        }
        .glitch:before {
        content: attr(data-text);
        position: absolute;
        left: -2px;
        text-shadow: 3.5px 0 rgb(32, 228, 146);
        top: 0;
        color: white;
        background: transparent;
        overflow: hidden;
        clip: rect(0, 900px, 0, 0);
        animation: noise-anim-2 3s infinite linear alternate-reverse;
        }
    .bgimg{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        height: 100vh;
        background:  no-repeat center/28% url(~@/assets/image/loginfail/登入失敗.svg);
    }
    

    h2{
        position: relative;
        margin: 100px auto 20px;
        font-size: 57.6px;
        font-weight: 700;
        letter-spacing: .2em;
        color: transparent;
        -webkit-text-stroke: 1px $blue;
        // text-shadow: 8.7px .5px $white, 9px 0px rgba(0,0,0,0), 8.9px .3px rgba(91, 19, 236, 40%);
        &::after{
            content: "SUCCESSFUL";
            position: absolute;
            left: 2%;
            top: 0;
            color: transparent;
            -webkit-text-stroke: .2px $white;
            // text-shadow: 0px 0px 10px $blue;
        }
        &::before{
            content: "SUCCESSFUL";
            position: absolute;
            left: 2%;
            top: 0;
            color: transparent;
            -webkit-text-stroke: 3.5px $blueO;
        }
    }
    .black-bg{
        background-color: rgba(14, 14, 14, .9);
        width: 100%;
        padding: 20px 0;

        h3, p{
            line-height: 2;
            text-align: center;
            font-size: $p1-l;
            color: $white;
            letter-spacing: .2em;
        }
    }
}


</style>
<script>
export default {
  mounted() {
    this.fixSvgFragments();
  },
  methods: {
    fixSvgFragments() {
      var ua = navigator.userAgent;

      if (!/firefox/gi.test(ua)) {
        return;
      }

      var feImgs = document.querySelectorAll("feImage");
      var cssList = document.styleSheets;
      var cssAnimations = {};

      for (var i = 0; i < cssList.length; i++) {
        var css = cssList[i];

        for (var j = 0; j < css.cssRules.length; j++) {
          var rule = css.cssRules[j];

          // is rule a keyframe animation?
          if (rule.type === 7) {
            cssAnimations[rule.name] = rule.cssText;
          }
        }
      }

      for (var i = 0, j = feImgs.length; i < j; i++) {
        var fragmentID = feImgs[i].getAttribute("xlink:href") || feImgs[i].getAttribute("xlink");

        if (/#/.test(fragmentID) && !/data:image\/svg\+xml/.test(fragmentID)) {
          this.fragmentAsURIintoFilter(fragmentID, feImgs[i]);
        }
      }
    },
    fragmentAsURIintoFilter(identifier, fePrimitive) {
      var el = document.querySelector(identifier);
      var styledEl = this.inlineStyles(el);
      var nsAttr = "http://www.w3.org/2000/svg";
      if (!styledEl.getAttribute("xmlns")) {
        styledEl.setAttribute("xmlns", nsAttr);
      }
      var text = encodeURIComponent(styledEl.outerHTML.replace(/100%/g, "256")).replace("\"", "\'");
      var target = fePrimitive;

      target.setAttribute("xlink:href", "data:image/svg+xml;charset=utf-8," + text);
    },
    inlineStyles(element) {
      var children = element.querySelectorAll("*");
      var animations = [];

      [].forEach.call(children, function (child) {
        var style = getComputedStyle(child);
        child.cssText = style;

        // Look for animations:
        for (var i = 0; i < style.length; i++) {
          var prop = style.item(i);
          var rule = style.getPropertyValue(prop);

          // is there a CSS keyframe animation applied to this element?
          // Copy it to an inlined style.
          if (/animation\-name/.test(prop) && rule !== "none") {
            if (animations.toString().indexOf(rule) < 0) {
              var svgStyle = document.createElement('style');

              svgStyle.innerHTML = cssAnimations[rule];
              element.appendChild(svgStyle);
              animations.push(rule);
            }
          }

          child.style[prop] = rule;
        }
      });

      return element;
    },
  },
};
</script>