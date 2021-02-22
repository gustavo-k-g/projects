
<?php
//ini_set('display_errors', 'On');
//error_reporting(E_ALL|E_STRICT);

$id = $_REQUEST['id'];
$cliente = $_REQUEST['cliente'];

$id = strval($id);



if(strlen($id) <= 0){
	echo "não há informações disponíveis";
}else{

$ch = curl_init();

//curl_setopt($ch, CURLOPT_URL, "https://private-anon-3757ee3340-asaasv3.apiary-mock.com/api/v3/invoices");
curl_setopt($ch, CURLOPT_URL, "https://staging.api.vuxx.com.br/segunda-via/asaas/customers?cpfCnpj=".$id);
//curl_setopt($ch, CURLOPT_URL, " https://www.asaas.com/api/v3/invoices/".$id);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Authorization: Bearer 9zGocWqskWcrGqSubfQm3YyrQhOe076XCMMUTREyyAY"
));

$response = curl_exec($ch);
curl_close($ch);

print_r($response);

}
?>
