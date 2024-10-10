//
// Created by mcdd2024 on 2024/9/19.
//


#include <stdio.h>
#include <string.h>

int main() {
    const char name[] = "mcdd";

    printf("sizeof --> %llu \n", sizeof(name));
    printf("sizeof --> %llu \n", sizeof(name[0]));
    printf("strlen --> %llu \n", strlen(name));
    printf("sizeof(name) / sizeof(name[0]) --> %llu \n", sizeof(name) / sizeof(name[0]));

    return 0;
}
