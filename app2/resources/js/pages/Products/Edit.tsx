import React from 'react';
import { Head } from '@inertiajs/react';
import { Link, usePage, useForm, router } from '@inertiajs/react';
import DeleteButton from '@/components/Button/DeleteButton';
import LoadingButton from '@/components/Button/LoadingButton';
import TextInput from '@/components/Form/TextInput';
import SelectInput from '@/components/Form/SelectInput';
import FileInput from '@/components/Form/FileInput';
import TrashedMessage from '@/components/Messages/TrashedMessage';
import { Product } from '@/types/Product';
import FieldGroup from '@/components/Form/FieldGroup';
import { Description } from '@radix-ui/react-dialog';

const Edit = () => {
  const { product } = usePage<{
    product: Product 
  }>().props;

  const { data, setData, errors, post, processing } = useForm({
    id: product.id || "",
    title: product.title || "",
    price: product.price || "",
    discountPrice: product.discountPrice || "",
    description: product.description || "",
    image: product.image ||"",

    _method: 'put'
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();


    post(route('products.update', product.id));
  }

  function destroy() {
    if (confirm('Are you sure you want to delete this user?')) {
      router.delete(route('products.destroy', product.id));
    }
  }

  function restore() {
    if (confirm('Are you sure you want to restore this product?')) {
      router.put(route('products.restore', product.id));
    }
  }

  return (
    <div>
      <Head title={`${data.title} ${data.description}`} />
      <div className="flex justify-start max-w-lg mb-8">
        <h1 className="text-3xl font-bold">
          <Link
            href={route('products')}
            className="text-indigo-600 hover:text-indigo-700"
          >
            products
          </Link>
          <span className="mx-2 font-medium text-indigo-600">/</span>
          {data.title} {data.description}
        </h1>
        {product.image && (
          <img className="block w-8 h-8 ml-4 rounded-full" src={product.image} />
        )}
      </div>
      {product.deleted_at && (
        <TrashedMessage
          message="This product has been deleted."
          onRestore={restore}
        />
      )}
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 p-8 lg:grid-cols-2">
            <FieldGroup
              label="First Name"
              name="title"
              error={errors.title}
            >
              <TextInput
                name="title"
                error={errors.title}
                value={data.title}
                onChange={e => setData('title', e.target.value)}
              />
            </FieldGroup>
            <FieldGroup
              label="Last Name"
              name="description"
              error={errors.description}
            >
              <TextInput
                name="description"
                error={errors.description}
                value={data.description}
                onChange={e => setData('description', e.target.value)}
              />
            </FieldGroup>

            <FieldGroup label="Email" name="price" error={errors.price}>
              <TextInput
                name="price"
                type="price"
                error={errors.price}
                value={data.price}
                onChange={e => setData('price', e.target.value)}
              />
            </FieldGroup>

            <FieldGroup
              label="discountPrice"
              name="discountPrice"
              error={errors.discountPrice}
            >
              <TextInput
                name="discountPrice"
                type="discountPrice"
                error={errors.discountPrice}
                value={data.discountPrice}
                onChange={e => setData('discountPrice', e.target.value)}
              />
            </FieldGroup>



            <FieldGroup label="Photo" name="image" error={errors.image}>
              <FileInput
                name="photo"
                accept="image/*"
                error={errors.image}
                value={data.image}
                onChange={image => {
                  setData('image', image as unknown as string);
                }}
              />
            </FieldGroup>
          </div>
          <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
            {!product.deleted_at && (
              <DeleteButton onDelete={destroy}>Delete User</DeleteButton>
            )}
            <LoadingButton
              loading={processing}
              type="submit"
              className="ml-auto btn-indigo"
            >
              Update User
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Edit;