txt1 = '1908  조선어학회 창립';
txt2 = '1911  조선어사전 편찬 착수' ;
txt3 = '1914  주시경 선생 사망';
txt4 = '1926  가갸날 지정';
txt5 = '1929  조선어사전 편찬회 조직';
txt6 = '1931  조선어학회로 명칭 변경';
txt7 = '1941  외래어 표기법 통일안 지정';
txt8 = '1942  조선어학회사건';
txt9 = '1947  [큰사전] 출판';

function setup() {
  createCanvas(windowWidth, windowWidth*0.625);
  
  img1 = loadImage('가갸날 잔치.png');
  img2 = loadImage('조선어사전편찬회.png');
  fnt = loadFont('경기천년제목_Medium.ttf');
  fntL = loadFont('경기천년제목_Light.ttf');
  
  txtS = width/74.4;
}

function draw() {
  background(220);
  cursor(CROSS);
  
  strokeWeight(3);
  line(width*0.05, height*0.1, width*0.05, height*0.9)
  
  strokeWeight(0);
  fill(0);
  
  ellx = width*0.05;
  ellipse(ellx, height*0.1, 10, 10);
  ellipse(ellx, height*0.2, 10, 10);
  ellipse(ellx, height*0.3, 10, 10);
  
  ellipse(ellx, height*0.6, 10, 10);
  ellipse(ellx, height*0.7, 10, 10);
  ellipse(ellx, height*0.8, 10, 10);
  ellipse(ellx, height*0.9, 10, 10);
  
  movc = color(240);
  strokeWeight(1);
  fill(movc);
  ellipse(ellx, height*0.4, 10, 10);
  ellipse(ellx, height*0.5, 10, 10);

  

  fill(0);
  strokeWeight(0);
  
  textAlign(LEFT);
  textSize(txtS);
  textStyle(BOLD);
  textFont(fnt);
  
  txtx = width*0.08
  text(txt1, txtx, height*0.11);
  text(txt2, txtx, height*0.21)
  text(txt3, txtx, height*0.31)
  
  movc = color(0);
  fill(movc);
  text(txt4, txtx, height*0.41)
  text(txt5, txtx, height*0.51)
  
  fill(0);
  text(txt6, txtx, height*0.61)
  text(txt7, txtx, height*0.71)
  text(txt8, txtx, height*0.81)
  text(txt9, txtx, height*0.91)
  

  rcw1 = textWidth(txt1)*1.15;
  rcw2 = textWidth(txt2)*1.15;
  rcw3 = textWidth(txt3)*1.15;
  rcw4 = textWidth(txt4)*1.2;
  rcw5 = textWidth(txt5)*1.15;
  rcw6 = textWidth(txt6)*1.15;
  rcw7 = textWidth(txt7)*1.15;
  rcw8 = textWidth(txt8)*1.15;
  rcw9 = textWidth(txt9)*1.15;
  
  if (10 > dist(mouseX, mouseY, ellx, height*0.1)) {
    fill(0, 20);
    rect(width*0.07, height*0.06, rcw1, height*0.08, 15);
  }
  if (10 > dist(mouseX, mouseY, ellx, height*0.2)) {
    fill(0, 20);
    rect(width*0.07, height*0.16, rcw2, height*0.08, 15);
  }
  if (10 > dist(mouseX, mouseY, ellx, height*0.3)) {
    fill(0, 20);
    rect(width*0.07, height*0.26, rcw3, height*0.08, 15);
  }
  if (10 > dist(mouseX, mouseY, ellx, height*0.6)) {
    fill(0, 20);
    rect(width*0.07, height*0.56, rcw6, height*0.08, 15);
  }
  if (10 > dist(mouseX, mouseY, ellx, height*0.7)) {
    fill(0, 20);
    rect(width*0.07, height*0.66, rcw7, height*0.08, 15);
  }
  if (10 > dist(mouseX, mouseY, ellx, height*0.8)) {
    fill(0, 20);
    rect(width*0.07, height*0.76, rcw8, height*0.08, 15);
  }
  if (10 > dist(mouseX, mouseY, ellx, height*0.9)) {
    fill(0, 20);
    rect(width*0.07, height*0.86, rcw9, height*0.08, 15);
  }
  
  
  brcw = width*0.35
  exw = brcw * 1.05
  
  
  imgS = width*0.4
  
  //가갸날
  if (10 > dist(mouseX, mouseY, ellx, height*0.4)) {
    
    fill(100);
    ellipse(ellx, height*0.4, 10, 10);
    rect(width*0.07, height*0.36, rcw4, height*0.08, 15);
    rect(brcw, height*0.13, imgS * 1.2, height*0.75, 15);
    
    fill(240);
    text('1926  가갸날 지정', txtx, height*0.41)
    
    textSize(txtS*1.3);
    text('가갸날잔치  (Gagya day Party)', exw, height*0.18);
    image(img1, exw, height*0.51, imgS, imgS*0.53);
    
    textSize(txtS);
    textFont(fntL);
    text("1926년은 훈민정음이 반포된지 480년이 되는 해였다. 훈민정음이 음력 9월에 완성되었다는 사실을 기념하여 당시 11월 4일에 (음력으로 9월 29일) 기념식을 거행했다. 여기서 ‘가갸날’은 한글을 처음 배울 때 ‘가갸거겨고교’ 라 발음하는 것에서 착안하여 이름을 지었다고 한다.\n\n1926 was the 480th year since the publication of Hunminjeongeum. To commemorate it’s creation, a ceremony was held on 4th of November. Here, 'Gagyanal' was named after the pronunciation of '가갸거겨고교' like 'abcde' in English when learning Korean for the first time.", exw, height*0.23, imgS);
  }
  
  imgS2 = width*0.3
  
  //조선어사전
  if (10 > dist(mouseX, mouseY, ellx, height*0.5)) {
    
    fill(100);
    ellipse(ellx, height*0.5, 10, 10);
    rect(width*0.07, height*0.46, rcw5, height*0.08, 15);
    rect(brcw, height*0.13, imgS * 1.2, height*0.75, 15);
    
    fill(240);
    text('1929  조선어사전 편찬회 조직', txtx, height*0.51)
    
    textSize(txtS*1.3);
    text('조선어 사전 편찬회  (Korean Dictionary Compilation)', exw, height*0.21);
    image(img2, exw*1.6, height*0.24, imgS2*0.7, imgS2);
    
    textSize(txtS);
    textFont(fntL);
    text('[조선어사전] 편찬 사업은 조선어학회의 주요 사업 중 하나인 어문 정리 사업에 해당하는 사업이었다.\n\n일제강점기 내내 한반도 내의 공용어는 일본어였지만, 이에 대한 저항으로 추진한 [조선어 사전] 편찬 사업은 어문민족주의가 어떠한 의미를 가졌는지 여실히 보여준다.\n\nThe [Korean Dictionary] compilation project was a part of one of the main language organization projects. Japanese was the official language of the Peninsula throughout the Japanese colonial period, but the project to compile the [Korean Dictionary] was pushed ahead as a tool for resistance and displayed clearly what linguistic nationalism meant.', exw, height*0.26, imgS2*0.7);
  }
  
}