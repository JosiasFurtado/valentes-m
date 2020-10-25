import React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';

import style from './styles';
import { tailwind } from '../../lib/styles';
import Input from '../../components/Input';

const mockData = [
  {
    id: "01",
    protocol: "#816826",
    name: "João Vitor",
    age: "6 anos",
    situation: "Leucemia linfóide aguda",
    time: "Diagnósticado há 1 ano",
    hospital: "HCP - Recife - PE"
  },
  {
    id: "02",
    protocol: "#001852",
    name: "Lucas Santos",
    age: "4 anos",
    situation: "Leucemia linfóide aguda",
    time: "Diagnósticado há 2 ano",
    hospital: "HCP - Recife - PE"
  },
  {
    id: "03",
    protocol: "#524000",
    name: "Ana Maria",
    age: "2 anos",
    situation: "Leucemia linfóide aguda",
    time: "Diagnósticado há 2 ano",
    hospital: "HCP - Recife - PE"
  }
]
const Home: React.FC = () => {
  return (
    <View style={[style.container, tailwind('relative')]}>
      <Header />
      <Text style={style.title}>Encontre seu paciente</Text>
      <View style={tailwind('relative')}>
        <Input
          label='Pesquisar'
          type="password"
          keyboardtype="default"
          maxlength={10}
        />
        <Feather name="search" size={24} style={tailwind('absolute bottom-0 right-0 mb-8')} color='#F2B441' />
      </View>
      <View style={[tailwind('rounded-lg px-2 py-2'), { backgroundColor: "#eeddbe" }]}>
        {mockData.map(item => (
          <View key={item.id} style={tailwind('mb-3')}>
            <View style={tailwind('flex-row justify-between items-center')}>
              <View style={tailwind('flex-row items-center')}>
                <Text style={tailwind('text-lg mr-3')}>{item.name}</Text>
                <Text>{item.age}</Text>
              </View>
              <View style={[tailwind('rounded-lg bg-primary-400 p-2'), { backgroundColor: "#F2D49D" }]}>
                <Text>{item.protocol}</Text>
              </View>
            </View>
            <View>
              <View style={tailwind('flex-row mb-2')}>
                <Feather name="activity" size={18} color="#F2B441" style={tailwind('mr-2')} />
                <Text style={tailwind('text-gray-800')}>{item.situation}</Text>
              </View>
              <View style={tailwind('flex-row mb-2')}>
                <Feather name="clock" size={18} color="#F2B441" style={tailwind('mr-2')} />
                <Text style={tailwind('text-gray-800')}>{item.time}</Text>
              </View>
              <View style={tailwind('flex-row')}>
                <Feather name="map-pin" size={18} color="#F2B441" style={tailwind('mr-2')} />
                <Text style={tailwind('text-gray-800')}>{item.hospital}</Text>
              </View>
              <View style={tailwind('-mt-4')}>
                <TouchableOpacity style={tailwind('items-end mb-1')}>
                  <Feather name="arrow-right" size={24} color="#B66604" />
                </TouchableOpacity>
                <View style={[{ backgroundColor: "#B66604" }, tailwind('h-px')]} />
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default Home;