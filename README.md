# MyDataReactPrj
마이데이터팀 리액트 CoP

## 사전설치
1. Node.js


## 실행방법

1. 깃허브 repository clone 진행

``` bash
git clone git@github.com:CoP-for-React-js-SpringBoot/MyDataReactPrj.git
```

2. 리액트 파일 열어서 라이브러리 설치

``` bash
npm install
```

3. 프로젝트 시작

``` bash
npm start
```



## 참고
``` text
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd mydata
  npm start

Happy hacking!
```


---  
### 리액트 환경 설정 (Window)  

본 repo를 clone하는 방식이 아닌, 처음부터 프로젝트를 생성하는 방법  

참고 사이트 : 

[리액트 React 설치와 개발환경 셋팅](https://codingapple.com/unit/react1-install-create-react-app-npx/)

---

## **설치 단계**

1. Node 설치 (https://nodejs.org/ko)
    - LTS 버전으로 설치 (현재 LTS Version 18.17.0)
    - 설치 시 자동으로 Node Package Manager (npm) 함께 설치

2. VS Code 설치 (https://code.visualstudio.com/)
    - ‘PATH 추가’ 와 같은 설치 옵션 있다면 선택.
    - ‘Code로 열기 디렉토리 메뉴 추가’ 와 같은 선택 항목이 있다면 선택 추천.

---

## 프로젝트 생성

3. 설치할 디렉토리에 Shift + 우클릭 후, ```여기에 PowerShell 창 열기``` 클릭. 

![1](https://github.com/WooriMyDataCoP/MyDataReactPrj/assets/5960472/d6af6729-cc3a-4477-880d-024638d5de0c)


4. PowerShell에서 다음의 명령어로 프로젝트 생성

```markdown
npx create-react-app {프로젝트명}
```

create-react-app 라이브러리를 통해 Spring boot starter와 같이 별도의 작업 없이도 손쉽게 프로젝트 생성 가능

(프로젝트명 대문자 불가)

![2](https://github.com/WooriMyDataCoP/MyDataReactPrj/assets/5960472/3ebc0fe5-eafd-4514-80a8-bf80d0800a66)


- 4.1 > 만약 ‘허가되지 않은 스크립트 입니다. ~~~~~’  에러일 시,

윈도우 검색을 통해 PowerShell을 관리자 권한으로 실행한 후, 아래 명령어 입력. Y 엔터.

```markdown
Set-ExecutionPolicy Unrestricted
```

![3](https://github.com/WooriMyDataCoP/MyDataReactPrj/assets/5960472/1a04c27f-bb1b-4601-813d-bfee19cec2ce)


![4](https://github.com/WooriMyDataCoP/MyDataReactPrj/assets/5960472/976e3170-45b4-4aa5-bdd2-f07c5ff19339)


- 4.2 > npm 버전이 낮은 경우 (기존 node가 오래전에 설치되어 있는 경우..)

최근 LTS node 버전으로 재설치. (CLI에서 보여주는 npm install 로 npm만 재설치해도 동작은 함)

![5](https://github.com/WooriMyDataCoP/MyDataReactPrj/assets/5960472/eed6fdd2-3f45-463a-b4b4-ae07b8321419)


5. 정상적으로 프로젝트 생성 확인

![6](https://github.com/WooriMyDataCoP/MyDataReactPrj/assets/5960472/13ac82cb-42b5-4e28-8cc3-cd8e34612307)


---

## 프로젝트 실행

6. VS Code로 실행

VS Code의 메뉴 중 Open Folder 선택 

(또는, VS Code 설치 시 ‘Code로 열기 디렉토리 메뉴 추가’ 와 같은 옵션을 선택했다면) 디렉토리 우클릭 후 ‘Code 로 열기’ 선택

![7](https://github.com/WooriMyDataCoP/MyDataReactPrj/assets/5960472/a993bf37-055b-4ed2-abb6-fee68100c638)


![8](https://github.com/WooriMyDataCoP/MyDataReactPrj/assets/5960472/6eab992d-307b-46da-ab66-02e73c17de92)


7. VS Code 상단 메뉴 Terminal에서 New terminal (Ctrl + Shift + ` (백틱))을 열고 다음 명령어 입력

```markdown
npm start
```

![9](https://github.com/WooriMyDataCoP/MyDataReactPrj/assets/5960472/5c71854e-4d9f-4ebf-bc21-3bd1620380de)


- VS Code 터미널에서도 PowerShell을 추천

![10](https://github.com/WooriMyDataCoP/MyDataReactPrj/assets/5960472/6de9a270-f018-4c0c-a607-e2f309511055)


8. 확인

![12](https://github.com/WooriMyDataCoP/MyDataReactPrj/assets/5960472/68a20330-85e5-4888-a330-cff6566ee1e7)

