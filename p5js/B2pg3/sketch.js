var c = 0;
var counter = 0;

//sentences
var sent;
var sent1 = '1876년, 조선의 개항은 청나라와 일본을 비롯한 열강의 한반도에 대한 욕망에 불을 지폈다. 조선은 이들로부터 국가 안보와 국가정체성을 지켜내야만 했다. 이를 위해, 조선사회는 근대적 의식과 근대적 문물을 확산시키고, 주변국 특히 중국의 간섭을 자주적으로 극복하고자 노력했다.';
var sent2 = "그 결과, 근대성을 촉진하는 도구로서 한글의 사회적 가치가 새롭게 부각된다. 이렇게 선구적 지식인들을 중심으로 국가발전과 민족의 자주성을 위해 한자 대신 한글을 사용해야 한다는 의식이 나타나게 되었고, 우리는 이러한 의식을 '어문민족주의'의 초기 형태로 간주한다.";

var sent1e = 'In 1876, the opening of the port of Joseon ignited the desire for the Korean Peninsula in powers including the Qing Dynasty and Japan. Joseon had to protect national security and national identity from them. To this end, Joseon society spread modern consciousness and modern culture, and tried to independently overcome interference from neighboring countries, especially China.';
var sent2e = "As a result, the social value of Hangeul as a tool to promote modernity was newly highlighted. In this way, the awareness that Hangeul should be used instead of Chinese characters for national development and national independence emerged from these pioneering intellectuals, and we regard this consciousness as an early form of ‘linguistic nationalism'.";


function setup() {
  cnv = createCanvas(windowWidth,windowWidth*0.625);
  cnv.mouseClicked(nextText)
  //cnv.keyPressed(langauge)
  
  img = loadImage('문호개방.PNG');
  img2 = loadImage('문호개방2.PNG');
  img3 = loadImage('이양선3.jpg');
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
  //print(width);
  
  textFont(fnt);
  textLeading(textS*1.4);
  
  if (sent == sent1 || sent == sent1e) {
    image(img, 0, 0, width, height);
  } if (sent == sent2 || sent == sent2e) {
    image(img2, 0, 0, width, height);
  }
  
  //image(img, 0,0, width, height);
  
  fill(60)
  noStroke();
  //rect(halfW, boxY, width, boxH);
  image(tbox, 0, boxY, width, boxH);
  
  rectMode(CENTER);
  

  
  fill(240);
  textSize(textS);
  //text(sent, diaW, diaH, diaL);
  
  typewriteText(sent);
  
}


function nextText() {
  if (sent == sent1) {
    sent = sent2;
    image(img2, 0, 0, width, height);
    //fill(60);
    //rect(halfW, boxY, width, boxH);
    fill(240);
    counter = 0;
  } if (sent == sent1e) {
    sent = sent2e;
    image(img2, 0, 0, width, height);
    fill(240);
    counter = 0;
  }
  /*else if (sent == sent2) {
    sent = sent1;
    fill(60);
    rect(halfW, boxY, width, boxH);
    fill(240);e
    text(sent, diaW, diaH, diaL);
  } */
}


function keyPressed() {
  if (key === 'e') {
    if (sent == sent1) {
      sent = sent1e;
      //image(img, 0, 0, width, height);
      fill(240);
      counter = 0;
    }
    else if (sent == sent2) {
      sent = sent2e;
      //image(img2, 0, 0, width, height);
      fill(240);
      counter = 0;
    }
    else if (sent == sent1e) {
      sent = sent1;
      fill(240);
      counter = 0;
    }
    else if (sent == sent2e) {
      sent = sent2;
      fill(240);
      counter = 0;
    }
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
      text(sent, diaW, diaH, diaL);
      
      if (sent == sent1 || sent == sent2) {
        fill(160);
        text('Press "e" key for English translations', width*0.1, height*0.96);
        if (sent == sent1) {
          text('다음 내용을 보려면 "클릭"하세요', width * 0.8, height * 0.96);
        }
      }
      
      if (sent == sent1e || sent == sent2e) {
        fill(160);
        text('한글로 보려면 "e" 키를 누르세요', width*0.1, height*0.96);
        if (sent == sent1e) {
          text('Click to see next', width *0.8, height*0.96);
        }
      }
    }
  }
}