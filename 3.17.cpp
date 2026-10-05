#include<bits/stdc++.h>
using namespace std;

int main(){

  int n,a,b,c,d,e;

  vector<int>vec;
  
  cin>>n;

  cout<<"$50 $10 $5 $1"<<endl;
  cout<<"--------------"<<endl;

  a=n/50;

  for(int i=0;i<a;i++){
    b=n-50;
    for(int j=0;j<b;j++){
      c=b-10;
      for(int k=0;k<c;k++){
        d=c-5;
        for(int l=0;l<d;l++){
          
          vec.push_back(l);
        }
        vec.push_back(k);
      }
      vec.push_back(j);
    }
    vec.push_back(i);
  }

  return 0;
}