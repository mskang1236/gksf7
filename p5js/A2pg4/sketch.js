var c = 0;
var counter = 0;

//sentences
var sent;
var sent1 = '이렇듯 20세기 초의 어문운동이 한국인의 결속에 크게 기여했음에도 불구하고, 국가 차원의 위기를 극복하는 데는 역부족이었다. 결국 1910년, 조선은 일본에 의해 국권을 빼앗긴다.';
var sent2 = '하지만 식민지 시기, 조선의 어문민족주의는 이전보다 더 강화된 형태로 나타나는데 이것은 일제의 식민지 통치 정책과 관련이 있다. 일제는 "내선일체" 즉 조선인과 일본인의 동일성을 강조함으로써 문화 차원에서 강력한 동화주의 정책을 사용했다. 이러한 억압에 대한 반작용으로서, 조선인들의 어문민족주의는 더욱 강해졌다.';
var sent3 = '일제강점기에 스스로의 말과 글을 지키려는 한국인들의 노력은 제도적 제약에도 불구하고 지속적으로 이루어졌다. 특히 이러한 노력에 있어 리더십을 발휘했던 것은 조선어학회였다. 조선어학회는 문자보급운동, 사전편찬사업, 외래어표기법 제정 등 구체적인 실천을 거듭하는 데 앞장섰다.';

var sent1e = 'Although the language movement in the early 20th century contributed greatly to the unity of Koreans, it was not enough to overcome the crisis at the national level. Eventually, in 1910, Joseon lost its sovereignty to Japan.';
var sent2e = "However, during the colonial period, Joseon's linguistic nationalism appeared in a stronger form than before, which is related to the colonial rule of Japan. The Japanese Empire used a strong assimilationist policy at the cultural level by emphasizing the 'integration of internal lines', that is, the identity of Koreans and Japanese. As a reaction to this oppression, the linguistic nationalism of Koreans became stronger.";
var sent3e = "Koreans' efforts to protect their own language and script during the Japanese colonial period continued despite institutional restrictions. In particular, it was the Korean Language Society that showed leadership in these efforts. The Korean Language Society (조선어학회/Joseoneohakoe) took the lead in repeating concrete practices such as the character dissemination movement, dictionary compilation project, and the enactment of a foreign language notation law.";


function setup() {
  cnv = createCanvas(windowWidth, windowWidth*0.625);
  //cnv.mouseClicked(nextText)
  
  img = loadImage('경술국치.PNG');
  img2 = loadImage('일제시대어문민족주의.PNG');
  img3 = loadImage('조선어학회.png');
  ybox = loadImage('조선어학회표.png');
  tbox = loadImage('텍스트박스.png');
  fnt = loadFont('경기천년제목_Light.ttf');
  
  halfW = width / 2
  halfH = height / 2
  
  boxH = height * 0.55
  boxY = height - (boxH*0.5)
  
  diaW = width * 0.5
  diaH = height * 13/16
  diaL = width * 0.8
  
  textS = width / 70.4;
  
  //rectMode(CENTER);
  textAlign(LEFT,TOP);
  
  cursor(CROSS);
  
  sent = sent1;
}

function draw() {
  background(220);
  
  textFont(fnt);
  textLeading(textS*1.4);
  
  //print(width);
  
  if (sent == sent1 || sent == sent1e) {
    image(img, 0, 0, width, height);
  } if (sent == sent2 || sent == sent2e) {
    image(img2, 0, 0, width, height);
  } if (sent == sent3 || sent == sent3e) {
    image(img3, 0, 0, width, height);
    //fill(255,255,0);
    //ellipse(width*0.42, height*0.24, 70, 70);
    
    
    if (50 > dist(mouseX, mouseY, width*0.42, height*0.24)) {
      fill(60,180);
      image(ybox, width*0.65, height*0.07, width*0.3, width*0.3*1.25);
      //image(ybox, width*0.65, height*0.37);
      //rect(width*0.8, height*0.37, width*0.3, height*0.65);
      //fill(255);
      //text('(표 들어갈 자리)', width*0.75, height*0.17)
    }
  }
  
  
  //image(img3, 0, 0, width, height);
  
  //image(img, 0,0, width, height);
  
  fill(60)
  noStroke();
  image(tbox, 0, boxY, width, boxH);
  //rect(halfW, boxY, width, boxH);
  
  rectMode(CENTER);
  
  
  fill(240);
  textSize(textS);
  //text(sent, diaW, diaH, diaL);
  
  typewriteText(sent);
  

}


function nextText() {
  fill(240);
  if (sent == sent1) {
    counter = 0;
    sent = sent2;
  } else if (sent == sent2) {
    counter = 0;
    sent = sent3;
  } else if (sent == sent1e) {
    sent = sent2e;
    counter = 0;
  } else if (sent == sent2e) {
    sent = sent3e;
    counter = 0;
  }
}


function keyPressed() {
  if (key === 'e') {
    if (sent == sent1) {
      sent = sent1e;
      //image(img, 0, 0, width, height);

    }
    else if (sent == sent2) {
      sent = sent2e;
      //image(img2, 0, 0, width, height);
    }
    else if (sent == sent3) {
      sent = sent3e;
    }
    else if (sent == sent1e) {
      sent = sent1;
    }
    else if (sent == sent2e) {
      sent = sent2;
    }
    else if (sent == sent3e) {
      sent = sent3;
    }
    fill(240);
    counter = 0;
  }
}


function typewriteText(str) {
  if (c < 3) {
	c++;
	if (c == 3) {
		counter++;
		c = 0;
	}
	textSize(textS);
    fill(240);
    
  text(sent.substring(0, counter), diaW, diaH, diaL);
	if (counter >= sent.length) {
      counter = sent.length;
      //counter = sent.length - 1
      //text(sent, diaW, diaH, diaL);
      
      if (sent == sent1 || sent == sent2 || sent == sent3) {
        fill(160);
        text('Press "e" key for English translations', width*0.1, height*0.96);
        if (sent == sent1 || sent == sent2) {
          text('다음 내용을 보려면 "클릭"하세요', width * 0.8, height * 0.96);
        } else if (sent == sent3) {
          text('책 위에 마우스 커서를 올려보세요', width * 0.8, height * 0.96);
        }
      }
      
      if (sent == sent1e || sent == sent2e || sent == sent3e) {
        fill(160);
        text('한글로 보려면 "e" 키를 누르세요', width*0.1, height*0.96);
        if (sent == sent1e || sent == sent2e) {
          text('Click to see next', width *0.8, height*0.96);
        }
      }
      
      cnv.mouseClicked(nextText)
	}
  }
}