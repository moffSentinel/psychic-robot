import Rego from "@open-policy-agent/opa-wasm";

const loadPolicy = async (policyFile: string) =>
  fetch(policyFile).then(
    res => res.arrayBuffer(),
    error => console.error(error)
  );

export const checkPolicy = async (data: any): Promise<boolean> => {
  const rego = new Rego();
  const policy_wasm = await loadPolicy("policy.wasm");
  const policy = await rego.load_policy(policy_wasm);

  const input_json = JSON.stringify(data);
  const eval_bool = policy.eval_bool(input_json);
  return eval_bool;
};
