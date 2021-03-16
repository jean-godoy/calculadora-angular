/**
 * Serviçø responsavel por executar as operações da calculadora
 * 
 * @author Jean Godoy <www.seidesistemas.com.br>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /**
   * define as constantes utilizadas
   * para identificar operacaoes de calculo
   */

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que calcula uma operação dado dois números
   * Suporta operações soma, subtração, divisão,
   * e multiplicação
   * 
   * @param num1 
   * @param num2 
   * @param operacao 
   * @retun number resultado da operacao
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // armazena resultado da operacao

    switch(operacao) {

      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;

    }

    return resultado;
  }
}
