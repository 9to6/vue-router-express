# Vuejs + nodejs + express **History mode**

I'm frontend javascript beginner using npm.  
I write this example project as I want to get easist simple project to learn vuejs. 

## Prerequisite

- npm  
- express-generator  
- express  
- [connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback)  
- vue-cli  
    + vuejs version **2.8.2**  

## Usage

### create example directory

```
$ mkdir test_route_express
```


### nodejs express settings

[Reference document](https://vuejs-kr.github.io/2017/02/05/express-with-vue/)

```
$ cd backend
$ npm install
$ DEBUG=backend:* npm start
```

Check npm start  
[http://localhost:3000](http://localhost:3000)  

### vuejs settings

#### install

```
$ vue init webpack frontend
# Enter informations on the prompt
# Must enter 'Y' about the question 'vue-router'
$ cd frontend
$ npm install
$ npm run dev
```

Check npm run dev 
[http://localhost:8080](http://localhost:8080)  

#### Frontend settings  

1. Remove this lines on this file, `frontend/config/index.js`  

```
...
index: path.resolve(__dirname, '../dist/index.html'),
assetsRoot: path.resolve(__dirname, '../dist'),
...
```

2. And add this lines  

```
...
index: path.resolve(__dirname, '../../backend/public/index.html'),
assetsRoot: path.resolve(__dirname, '../../backend/public'),
...
```

3. Add new component  

`frontend/src/components/Second.vue`  
```
<template>
  <div>
    <h1>Second page</h1>
    
  </div>
</template>

<script>
export default {
  created: function () {
    console.log('created')
  },
  data: function () {
    return {
      movie: {}
    }
  }
}
</script>
```

4. Change content on this file, `frontend/src/router/index.js`  

```
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Second from '@/components/Second'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    }
  ]
})

```

5. npm build  

Now you have to compile vuejs  
```
$ cd frontend
$ npm run build
```

You can see `index.html` file in `public` directory.  

### nodejs express settings again

1. Remove this lines on this file, `backend/routes/index.js`  

```
res.render('index', { title: 'Express' });
```

2. And add this lines  

```
res.sendFile(path.join(__dirname, '../public', 'index.html'))
```

### Run

```
$ cd backend
$ DEBUG=backend:* npm start
```

Go to [http://localhost:3000/second](http://localhost:3000/second)  

