var c = 0;
var counter = 0;

//sentences
var sent;
var sent1 = '1990년대에 이르러 한국으로 유입되는 외국인 노동자와 다른 문화를 가진 사람들의 수는 대폭 증가하였고, 이에 따라 한국어 교육에 대한 수요 역시 늘어났다. 또한 90년대 후반 "한류"에 따른 한국문화에 대한 수요와 영향력이 증가함으로써, 한국의 국제적 위상은 새로 거듭났으며 국어의 가치 또한 세계로 알려지기 시작했다. 비로소 한글은 학교 교육을 통해 제도적으로 정착했고, 명실상부한 한국인의 문자로 자리매김했다. 나아가 21세기, 한국의 문화적/경제적 영향력의 확대와 더불어 한국어와 한글은 전례 없는 전성시대를 맞이할 준비를 하고 있다.';
var sent2 = '그러나 국가정체성의 위기에 한국인들을 결속하게 해준 어문민족주의는 과연 오늘날 세계화의 맥락에서도 유효한 믿음일까? 근대 한국의 역사를 통해 살펴보았듯 어문민족주의는 한국어와 한글을 외부의 파괴적 영향력으로부터 지켜내는데 크게 기여했지만, 이를 위해 피할 수 없었던 전제는 민족이 하나로 뭉칠 수 있게 해주는 강한 방어성과 배제성이었다. 이러한 의식은 제국주의 시기 한국 고유의 문화와 정신이 훼손되지 않기 위해 중요한 것이었지만, 점차 다원화된 한국사회에 그대로 적용되기에는 맥락착오적(context-misleading)인 측면이 있을지 모른다.';
var sent3 = '특히 한국의 경제적 영향력이 크게 성장함에 따라, 중국, 베트남, 필리핀, 캄보디아, 태국 등 동아시아와 동남아시아에서 온 이민자들의 수와 외국계 한국인들의 수가 눈에 띄게 늘어났다. 이들을 대상으로 한 동화주의 관점의 문화정책은 논란을 야기했고, 비교적 최근에는 이민자 가정의 여성과 아이들을 대상으로 한 이중언어 활용 지원 방안에 대한 논의가 활발해지고 있다. 표면적으로 어문민족주의 담론은 우리 곁을 떠났지만, 어쩌면 언젠가는 ‘세계 속 한국’을 살아가는 오늘날의 우리에게 다른 모습의 새로운 이데올로기로 다시 나타날 수도 있지 않을까?';
var sent4 = '새로운 시대, 새로운 환경을 살아가고 있는 우리는 과거의 ‘어문민족주의’를 어떻게 받아들여야 할까? 세계화 시대에, ‘어문민족주의’가 지키려고 했던 가치들은 어떻게 새롭게 적응하고 변화할 수 있을까?';

var sent1e = "In the 1990s, the number of foreign workers and people of different cultures entering Korea increased significantly, and the demand for Korean language education increased accordingly. Also, as the demand and influence of Korean culture increased due to the 'Korean Wave' or ‘The Hallyu Wave’ in the late 1990s, Korea's international status was renewed and the value of the Korean language began to be known around the world. Finally, Hangeul was systematically established through school education and established itself as the undisputed character of Koreans. Furthermore, in the 21st century, along with the expansion of Korea's cultural and economic influence, the Korean language and Hangeul are preparing for an unprecedented heyday.";
var sent2e = "However, is the linguistic nationalism that united Koreans in the crisis of national identity a valid belief in today's globalization context? As seen through the history of modern Korea, linguistic nationalism contributed greatly to protecting the Korean language and Hangeul from external destructive influences, but the unavoidable premise for this was strong defense and exclusion that allowed the nation to unite. Although this consciousness was important in order not to damage Korea's unique culture and spirit during the imperialist period, it may be context-misleading to be applied to the increasing heterogeneity of Korean society.";
var sent3e = "In particular, as Korea's economic influence has grown significantly, the number of immigrants from East Asia and Southeast Asia, such as China, Vietnam, the Philippines, Cambodia and Thailand, and the number of foreign Koreans have increased significantly. Cultural policies from an assimilationist perspective targeting them have caused controversy, and recently, discussions on ways to support the use of bilingualism for women and children of immigrant families have been active. On the surface, the discourse of linguistic nationalism has left us, but maybe someday it may reappear as a new ideology with a different appearance to us who live in ‘Korea in the world’.";
var sent4e = "How should we, living in a new era, a new environment, accept the ‘linguistic nationalism’ of the past? In the era of globalization, how can we change and adapt the values that 'linguistic nationalism' has tried to protect until now?";


function setup() {
  cnv = createCanvas(windowWidth,windowWidth*0.625);
  
  
  img = loadImage('한국의세계화-01.png');
  img2 = loadImage('어문민족주의한계.PNG');
  img3 = loadImage('이중언어.png');
  img4 = loadImage('미래어문민족주의.PNG');
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
  
  if (sent == sent1 || sent == sent1e) {
    image(img, 0, 0, width, height);
  } if (sent == sent2 || sent == sent2e) {
    image(img2, 0, 0, width, height);
  } if (sent == sent3 || sent == sent3e) {
    image(img3, 0, 0, width, height);
  } if (sent == sent4 || sent == sent4e) {
    image(img4, 0, 0, width, height);
  }
  
  
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
    sent = sent2;
    counter = 0;
  } else if (sent == sent2) {
    sent = sent3;
    counter = 0;
  } else if (sent == sent3) {
    sent = sent4;
    counter = 0;
  } else if (sent == sent1e) {
    sent = sent2e;
    counter = 0;
  } else if (sent == sent2e) {
    sent = sent3e;
    counter = 0;
  } else if (sent == sent3e) {
    sent = sent4e;
    counter = 0;
  }
}

function keyPressed() {
 fill(240);
  if (key === 'e') {
    if (sent == sent1) {
      sent = sent1e;
      counter = 0;
    }
    else if (sent == sent2) {
      sent = sent2e;
      counter = 0;
    }
    else if (sent == sent3) {
      sent = sent3e;
      counter = 0;
    }
    else if (sent == sent4) {
      sent = sent4e;
      counter = 0;
    }
    else if (sent == sent1e) {
      sent = sent1;
      counter = 0;
    }
    else if (sent == sent2e) {
      sent = sent2;
      counter = 0;
    }
    else if (sent == sent3e) {
      sent = sent3;
      counter = 0;
    } else if (sent == sent4e) {
      sent = sent4;
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
  text(sent.substring(0, counter), diaW, diaH*0.95, diaL);
	if (counter >= sent.length) {
      counter = sent.length;
      //text(sent, diaW, diaH, diaL);
      
      if (sent == sent1 || sent == sent2 || sent == sent3 || sent == sent4) {
        fill(160);
        text('Press "e" key for English translations', width*0.1, height*0.96);
        if (sent !== sent4) {
          text('다음 내용을 보려면 "클릭"하세요', width * 0.8, height * 0.96);
        }
      }
      
      if (sent == sent1e || sent == sent2e || sent == sent3e || sent == sent4e) {
        fill(160);
        text('한글로 보려면 "e" 키를 누르세요', width*0.1, height*0.96);
        if (sent !== sent4e) {
          text('Click to see next', width *0.8, height*0.96);
        }
      }

      
      cnv.mouseClicked(nextText)
		}
	}
}