<template>
  <div>

    <Row :gutter="20" style="margin-top: 10px;">
      <i-col :md="24" :lg="21" style="margin-bottom: 20px;">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="barData" text="每日消息数统计"/>
        </Card>
      </i-col>
    </Row>

    <Row :gutter="20">
      <i-col :xs="12" :md="8" :lg="7" v-for="(infor, i) in DeviceData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>

  </div>
</template>

<script>
import axios from '@/libs/api.request'
// import Axios from 'axios'
// import axios from '@/libs/api.request'
// import axios from 'axios'
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'

import { getT } from '@/api/test.js'


export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  
  data () {
    return {
      DeviceData: [
          { title: '设备总量', icon: 'md-locate', count: 232, color: '#000000' },
          { title: '在线设备', icon: 'md-help-circle', count: 142, color: '#19be6b' },
          { title: '告警设备', icon: 'md-map', count: 14, color: '#FF0000' },
        ],
      pieData: [
      ],
      barData: {
        "-1":5,
        "-2":10,
        "-3":5
      }
    }

  },

//问题知道了！这里进入了fetch
  mounted () {
    getT().then(   
      response => {
    this.barData = response
    }).catch(
      err => {
    console.log(err)
    })



  },
  methods: {
    transform(data){
      let param = new URLSearchParams()
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          param.append(key, data[key])
        }
      }
      return param;
  },
  
    /*test(){
      axios.request({
        method: 'post',
        url:'api/gateway/new', 
        data: {gateway_id: 'a', description: 'c'}
      })
      .then((response) => {
          console.log(response);
      })
      .catch((error) => {
          console.log(error);
      });
    }*/
  },
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
