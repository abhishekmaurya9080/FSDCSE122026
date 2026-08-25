#include <iostream>
using namespace std;
void swapValue(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}
void swapReference(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}
void swapAddress(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {

    int x = 10, y = 20;
    swapValue(x, y);
    cout << "Call by Value: " << x << " " << y << endl;
    swapReference(x, y);
    cout << "Call by Reference: " << x << " " << y << endl;
    swapAddress(&x, &y);
    cout << "Call by Address: " << x << " " << y << endl;

    return 0;
}