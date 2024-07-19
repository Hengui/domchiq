import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartProvider";
import Input from "../../components/input";
import CartItem from "../../components/CartItem";
import { Check } from 'feather-icons-react';
import Button from "../../components/Button";
import toast from 'react-hot-toast'; 
import Skeleton from 'react-loading-skeleton'; 

const coupons = [
  { code: "Domchiq-10", discount: 10 },
  { code: "Domchiq-20", discount: 20 }
];

function Checkout() {
  const { cart, cartTotal, cleanCart } = useCart();
  const [loading, setLoading] = useState(true);

  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [payment, setPayment] = useState("");
  const [address, setAddress] = useState({
    cep: '',
    street: '',
    number: '',
    city: '',
    neighborhood: '',
    state: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const applyCoupon = () => {
    const foundCoupon = coupons.find(c => c.code === coupon);
    if (foundCoupon) {
      const discountValue = foundCoupon.discount;
      setDiscount(discountValue);
      toast.success('Desconto aplicado!');
    } else {
      setDiscount(0); 
      toast.error('Cupom inválido!');
    }
  };

  const submit = () => {
    setLoading(true);

    console.log({
      products: cart,
      address,
      payment,
      total: cartTotal() * (1 - (discount / 100)) + 10, 
      discount,
      coupon
    });

    cleanCart();

    setDiscount(0);
    setCoupon("");
    setPayment("");
    setAddress({
      cep: '',
      street: '',
      number: '',
      city: '',
      neighborhood: '',
      state: '',
    });

    setLoading(false);
    toast.success('Pedido efetuado!');
  };

  return (
    <div className="px-10 py-1 2xl:py-2">
      <h1 className="text-2xl font-bold text-slate-900 2xl:mb-2">Finalizar pedido</h1>
      <div className="flex">
        <div className="flex flex-col w-3/5">
          <h2 className="text-2xl font-bold text-slate-900">Itens no carrinho</h2>
          <div className="flex flex-col gap-3 h-[300px] 2xl:h-[550px] 2xl:mb-4 overflow-y-scroll ">
            {cart.length === 0 && <p className="w-full font-semibold text-slate-700 text-center mt-16 text-lg">O carrinho está vazio</p>}
            {cart.map((item) => <CartItem key={item.id} item={item} />)}
          </div>
          <div className="flex flex-col mt-1">
            <h2 className="text-xl font-bold text-slate-900 2xl:mb-2">Informações de Entrega</h2>
            <div className="w-full flex gap-2">
              <Input
                value={address.cep}
                onChange={(value) => setAddress({ ...address, cep: value })}
                label="CEP"
                type="text"
                placeholder="Digite seu CEP"
                loading={loading}
              />
              <Input
                value={address.street}
                onChange={(value) => setAddress({ ...address, street: value })}
                label="Logradouro"
                type="text"
                placeholder="Digite o logradouro"
                loading={loading}
              />
            </div>
            <div className="w-full flex gap-2">
              <Input
                value={address.number}
                onChange={(value) => setAddress({ ...address, number: value })}
                label="Número"
                type="text"
                placeholder="Digite o número"
                loading={loading}
              />
              <Input
                value={address.city}
                onChange={(value) => setAddress({ ...address, city: value })}
                label="Cidade"
                type="text"
                placeholder="Digite a cidade"
                loading={loading}
              />
              <Input
                value={address.neighborhood}
                onChange={(value) => setAddress({ ...address, neighborhood: value })}
                label="Bairro"
                type="text"
                placeholder="Digite o bairro"
                loading={loading}
              />
              <Input
                value={address.state}
                onChange={(value) => setAddress({ ...address, state: value })}
                label="Estado"
                type="text"
                placeholder="Digite o estado"
                loading={loading}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/5 ml-12">
          <h2 className="text-xl font-bold text-slate-900">Pagamento</h2>
          <div className="rounded bg-white p-5">
            <div className="flex justify-between">
              <p className="font-semibold text-slate-700">Subtotal</p>
              <span className="font-bold text-slate-700">
                {loading ? (
                  <Skeleton width={100} height={20} />
                ) : (
                  cartTotal()?.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold text-slate-700">Entrega</p>
              <span className="font-bold text-slate-700">R$ 10,00</span>
            </div>
            <div className="flex justify-between my-6">
              <p className="font-semibold text-slate-700">Aplicar cupom</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Digite um cupom"
                  className="border-2 border-slate-700 rounded mr-2 px-2"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <div className="bg-blue-500 rounded p-1" onClick={applyCoupon}>
                  <Check className="text-white" />
                </div>
              </div>
            </div>
            {discount > 0 && (
              <div className="flex justify-between my-4">
                <p className="font-semibold text-slate-700">Desconto</p>
                <span className="font-bold text-green-500">
                  - {discount}%
                </span>
              </div>
            )}
            <div className="flex justify-between">
              <p className="font-semibold text-xl text-slate-700">Total</p>
              <span className="font-bold text-xl text-slate-700">
                {loading ? (
                  <Skeleton width={100} height={20} />
                ) : (
                  (cartTotal() * (1 - (discount / 100)) + 10)?.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })
                )}
              </span>
            </div>
            <h3 className="font-semibold text-slate-700 mt-5">Selecione o método de pagamento</h3>
            <div className="flex gap-8 mt-3">
              <label>
                <input type="radio" name="payment" value="money" onChange={(e) => setPayment(e.currentTarget.value)} />
                Dinheiro
              </label>
              <label>
                <input type="radio" name="payment" value="debit" onChange={(e) => setPayment(e.currentTarget.value)} />
                Débito
              </label>
              <label>
                <input type="radio" name="payment" value="credit" onChange={(e) => setPayment(e.currentTarget.value)} />
                Crédito
              </label>
              <label>
                <input type="radio" name="payment" value="pix" onChange={(e) => setPayment(e.currentTarget.value)} />
                PIX
              </label>
            </div>
            <Button
              onClick={submit}
              className="w-full bg-black text-white rounded px-3 py-2 text-slate-800 font-semibold text-lg cursor-pointer mt-6 hover:bg-blue-500"
            >
              Finalizar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
