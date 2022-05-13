## Drag N Drop Practice

### Drag Event type;
e: React.DragEvent<HTMLDivElement>;

### Drag Item의 타겟과 e.dataTransfer 
어떤 이유인지는 몰라도 위의 React.DragEvent<HTMLDivElement> 으로 설정할시 
e.targetd을 못잡았다. 

e.target이 Element의 요소인지 확인 후에야 가능하였음.

if(e.target instanceof Element){}