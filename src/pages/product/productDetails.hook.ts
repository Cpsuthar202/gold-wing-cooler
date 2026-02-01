import { useSearchParams } from "react-router-dom";
import Product from "@/data/products.json";
import { useResponsiveScreens } from "@components/mediaQuery/useResponsiveScreens";
import { useEffect, useState } from "react";
export const useProductDetails = () => {
  const [searchParams] = useSearchParams();

  // Access specific query parameters

  const model_name = searchParams.get("model_name");
  const { isSmScreen } = useResponsiveScreens();
  const productdata = Product.find((p) => p.model_name === model_name);
  const [selectImage, setSelectImage] = useState<string | undefined>(productdata?.images[0]);

  useEffect(() => {
    setSelectImage(productdata?.images[0]);
  }, [productdata]);

  const features = {
    model_name: productdata?.model_name,
    dimension: productdata?.dimension,
    motor: productdata?.motor,
    // panel_size: productdata?.panel_size,
    water_tank: productdata?.water_tank,
    fan: productdata?.fan,
    speed_control: productdata?.speed_control,
    oscillating_louvers: productdata?.oscillating_louvers,
    cooling_pad: productdata?.cooling_pad,
    // noise_level: productdata?.noise_level,
    // power_consumption: productdata?.power_consumption,
    air_throw_distance: productdata?.air_throw_distance,
    // airflow_capacity: productdata?.airflow_capacity,
    // cooling_area: productdata?.cooling_area,
    warranty: productdata?.warranty,
    // inverter_compatible: productdata?.inverter_compatible ? "true" : "false",
  };
  const featureList = [
    { label: "Air Throw", value: features.air_throw_distance },
    { label: "Tank Capacity", value: features.water_tank },
    { label: "Motor", value: features.motor },
    { label: "Fan", value: features.fan },
    { label: "Speed Control", value: features.speed_control },
    { label: "Cooling Pad", value: features.cooling_pad },
    { label: "Oscillating Louvers", value: features.oscillating_louvers },
    { label: "Warranty", value: features.warranty },
  ];

  return {
    variables: { productdata, features, featureList, isSmScreen, selectImage, setSelectImage },
    methods: {},
  };
};
