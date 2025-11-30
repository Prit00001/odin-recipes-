#include<iostream>
using namespace std;

int main(){
int num,temp,digit,sum=0,n=0;

cout<<"Enter a number:";
cin>>num;

temp=num;

while(temp>0){
    temp=temp/10;
    n++;
}
temp=num;

while(temp>0){
    int digit=temp%10;
    sum+=pow(digit,n);
    temp=temp/10;
}

if(sum==num)
cout<<num<<" is a Armstrong number";
else
cout<<num<< "is not a Armstrong number";
return 0;}